package com.gamehub.server.result;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.daily.DailyRandom;
import com.gamehub.server.result.ResultDtos.DailyEntry;
import com.gamehub.server.result.ResultDtos.LeaderboardEntry;
import com.gamehub.server.result.ResultDtos.Rejection;
import com.gamehub.server.result.ResultDtos.ResultDto;
import com.gamehub.server.result.ResultDtos.ResultPayload;
import com.gamehub.server.result.ResultDtos.SyncRequest;
import com.gamehub.server.result.ResultDtos.SyncResponse;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserRepository;

import tools.jackson.core.JacksonException;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

/**
 * Ghi nhận kết quả (idempotent theo {@code (userId, clientId)}), đồng bộ hai chiều và bảng xếp hạng.
 * Mỗi kết quả được lưu trong giao dịch riêng để một bản ghi lỗi không làm hỏng cả lô đồng bộ.
 */
@Service
public class ResultService {

    private static final Logger log = LoggerFactory.getLogger(ResultService.class);
    static final int SYNC_PAGE = 500;
    static final int MAX_DETAILS_CHARS = 16_000;
    /** Kết quả hằng ngày nhận muộn quá mức này sau khi chơi coi như chơi offline: không xếp hạng ngày. */
    static final Duration DAILY_LIVE_WINDOW = Duration.ofMinutes(15);
    /** Cho phép gửi kết quả ván kết thúc sát nửa đêm thêm một chút sau khi sang ngày mới. */
    static final Duration DAILY_GRACE = Duration.ofMinutes(10);
    static final List<String> GAMES = List.of("rubik", "sudoku", "puzzle", "caro");
    private static final TypeReference<Map<String, Object>> MAP = new TypeReference<>() {
    };

    public enum Status { ACCEPTED, DUPLICATE, REJECTED }

    public record Submission(Status status, String reason, GameResultEntity entity) {
    }

    private final GameResultRepository results;
    private final UserRepository users;
    private final ResultVerifier verifier;
    private final Validator validator;
    private final ObjectMapper mapper;
    private final Clock clock;

    public ResultService(GameResultRepository results, UserRepository users, ResultVerifier verifier,
            Validator validator, ObjectMapper mapper, Clock clock) {
        this.results = results;
        this.users = users;
        this.verifier = verifier;
        this.validator = validator;
        this.mapper = mapper;
        this.clock = clock;
    }

    public Submission submit(UUID userId, ResultPayload p) {
        if (p == null) {
            return new Submission(Status.REJECTED, "Dữ liệu rỗng", null);
        }
        Set<ConstraintViolation<ResultPayload>> violations = validator.validate(p);
        if (!violations.isEmpty()) {
            ConstraintViolation<ResultPayload> v = violations.iterator().next();
            return new Submission(Status.REJECTED, "Trường " + v.getPropertyPath() + " không hợp lệ", null);
        }
        var existing = results.findByUserIdAndClientId(userId, p.clientId());
        if (existing.isPresent()) {
            return new Submission(Status.DUPLICATE, null, existing.get());
        }
        ResultVerifier.Verified v;
        try {
            v = verifier.verify(p);
        } catch (ResultVerifier.Rejected e) {
            return new Submission(Status.REJECTED, e.getMessage(), null);
        }
        if (v.score() != p.score()) {
            log.info("Điểm client ({}) khác điểm server ({}) cho {} {} — lưu điểm server",
                    p.score(), v.score(), p.game(), p.clientId());
        }
        Map<String, Object> details = new LinkedHashMap<>(p.details() == null ? Map.of() : p.details());
        details.remove("syncRejected");
        String json;
        try {
            json = mapper.writeValueAsString(details);
        } catch (JacksonException e) {
            return new Submission(Status.REJECTED, "Chi tiết ván không hợp lệ", null);
        }
        if (json.length() > MAX_DETAILS_CHARS) {
            return new Submission(Status.REJECTED, "Chi tiết ván quá lớn", null);
        }
        Instant now = Instant.now(clock);
        GameResultEntity entity = new GameResultEntity(userId, p.clientId(), p.game(), p.mode(), p.outcome(),
                v.score(), p.durationMs(), p.moves(), p.errors(), p.hints(), v.assisted(), v.rankable(),
                p.playedAt(), now, json);
        if (v.rankable() && details.get("daily") instanceof String daily && isLiveDaily(daily, p.playedAt(), now)) {
            entity.setDailyDate(daily);
        }
        try {
            return new Submission(Status.ACCEPTED, null, results.saveAndFlush(entity));
        } catch (DataIntegrityViolationException race) {
            // Hai yêu cầu đồng thời cùng clientId: bản kia đã được lưu.
            return results.findByUserIdAndClientId(userId, p.clientId())
                    .map(e -> new Submission(Status.DUPLICATE, null, e))
                    .orElseThrow(() -> race);
        }
    }

    /**
     * Kết quả hằng ngày chỉ được xếp hạng ngày khi gửi "trực tiếp": server nhận trong ngày đó (thêm
     * {@link #DAILY_GRACE}), gửi không quá {@link #DAILY_LIVE_WINDOW} sau khi chơi, và thời điểm
     * chơi nằm trong ngày (± {@link ResultVerifier#MAX_CLOCK_SKEW} cho lệch đồng hồ). Thời điểm nhận
     * do server đo nên không thể chơi offline trước rồi khai lùi giờ để được xếp hạng.
     */
    static boolean isLiveDaily(String daily, Instant playedAt, Instant receivedAt) {
        LocalDate day = DailyRandom.parse(daily);
        if (day == null) {
            return false;
        }
        Instant start = DailyRandom.startOf(day);
        Instant end = DailyRandom.endOf(day);
        return !receivedAt.isBefore(start) && receivedAt.isBefore(end.plus(DAILY_GRACE))
                && !playedAt.isBefore(receivedAt.minus(DAILY_LIVE_WINDOW))
                && !playedAt.isBefore(start.minus(ResultVerifier.MAX_CLOCK_SKEW))
                && playedAt.isBefore(end.plus(ResultVerifier.MAX_CLOCK_SKEW));
    }

    /** POST /results: trả về bản ghi đã lưu, hoặc 422 kèm lý do khi bị từ chối. */
    public ResultDto submitOne(UUID userId, ResultPayload p) {
        Submission s = submit(userId, p);
        if (s.status() == Status.REJECTED) {
            throw ApiException.unprocessable("RESULT_REJECTED", s.reason());
        }
        return toDto(s.entity());
    }

    public SyncResponse sync(UUID userId, SyncRequest req) {
        Instant serverTime = Instant.now(clock);
        Instant since = parseSince(req.since());
        List<String> accepted = new ArrayList<>();
        List<String> duplicates = new ArrayList<>();
        List<Rejection> rejected = new ArrayList<>();
        Set<String> sent = new HashSet<>();
        for (ResultPayload p : req.results()) {
            Submission s = submit(userId, p);
            String id = p == null ? null : p.clientId();
            if (id != null) {
                sent.add(id);
            }
            switch (s.status()) {
                case ACCEPTED -> accepted.add(id);
                case DUPLICATE -> duplicates.add(id);
                case REJECTED -> rejected.add(new Rejection(id, s.reason()));
            }
        }
        List<GameResultEntity> changed = results.changedSince(userId, since, PageRequest.of(0, SYNC_PAGE));
        if (changed.size() == SYNC_PAGE) {
            // Còn nữa: lần sau tiếp tục từ bản ghi cuối (so sánh >= nên không bỏ sót).
            serverTime = changed.get(changed.size() - 1).getReceivedAt();
        }
        List<ResultDto> out = changed.stream()
                .filter(e -> !sent.contains(e.getClientId()))
                .map(this::toDto)
                .toList();
        return new SyncResponse(accepted, duplicates, rejected, out, serverTime);
    }

    private static Instant parseSince(String since) {
        if (since == null || since.isBlank()) {
            return Instant.EPOCH;
        }
        try {
            return Instant.parse(since);
        } catch (DateTimeParseException e) {
            throw ApiException.badRequest("VALIDATION", "Giá trị 'since' phải là thời điểm ISO-8601");
        }
    }

    public List<ResultDto> history(UUID userId, String game, int limit) {
        return results.history(userId, game, PageRequest.of(0, Math.clamp(limit, 1, 200))).stream()
                .map(this::toDto)
                .toList();
    }

    public List<LeaderboardEntry> leaderboard(String game, String period, int limit) {
        requireGame(game);
        Instant now = Instant.now(clock);
        Instant from = switch (period == null ? "all" : period) {
            case "all" -> Instant.EPOCH;
            case "day" -> now.minus(Duration.ofDays(1));
            case "week" -> now.minus(Duration.ofDays(7));
            case "month" -> now.minus(Duration.ofDays(30));
            default -> throw ApiException.badRequest("VALIDATION", "Khoảng thời gian phải là all/day/week/month");
        };
        return board(results.leaderboard(game, from, PageRequest.of(0, Math.clamp(limit, 1, 100))));
    }

    /** Bảng xếp hạng của ngày thử thách {@code date}. */
    public List<LeaderboardEntry> dailyLeaderboard(LocalDate date, String game, int limit) {
        requireGame(game);
        return board(results.dailyLeaderboard(game, date.toString(), PageRequest.of(0, Math.clamp(limit, 1, 100))));
    }

    /** Kết quả hằng ngày đã xác thực của người dùng trong {@code days} ngày gần nhất (kể cả hôm nay). */
    public List<DailyEntry> dailyMine(UUID userId, int days) {
        LocalDate from = DailyRandom.dayOf(Instant.now(clock)).minusDays(Math.clamp(days, 1, 366) - 1L);
        return results.dailyOf(userId, from.toString(), PageRequest.of(0, 2000)).stream()
                .map(e -> new DailyEntry(e.getClientId(), e.getDailyDate(), e.getGame(), e.getScore()))
                .toList();
    }

    private static void requireGame(String game) {
        if (!GAMES.contains(game)) {
            throw ApiException.badRequest("VALIDATION", "Trò chơi không hợp lệ");
        }
    }

    private List<LeaderboardEntry> board(List<GameResultRepository.BoardRow> rows) {
        Map<UUID, User> byId = users.findAllById(rows.stream().map(GameResultRepository.BoardRow::getUserId).toList())
                .stream().collect(Collectors.toMap(User::getId, Function.identity()));
        List<LeaderboardEntry> out = new ArrayList<>();
        for (var row : rows) {
            User u = byId.get(row.getUserId());
            if (u == null) {
                continue;
            }
            out.add(new LeaderboardEntry(out.size() + 1, u.getId(), u.getDisplayName(), u.getAvatarColor(),
                    row.getBestScore(), row.getBestTimeMs(), row.getGamesPlayed()));
        }
        return out;
    }

    ResultDto toDto(GameResultEntity e) {
        Map<String, Object> details;
        try {
            details = mapper.readValue(e.getDetails(), MAP);
        } catch (JacksonException ex) {
            details = Map.of();
        }
        return new ResultDto(e.getClientId(), e.getUserId(), e.getGame(), e.getMode(), e.getOutcome(), e.getScore(),
                e.getDurationMs(), e.getMoves(), e.getErrors(), e.getHints(), e.isAssisted(), e.isRankable(),
                e.getPlayedAt(), e.getReceivedAt(), details, e.getDailyDate());
    }
}
