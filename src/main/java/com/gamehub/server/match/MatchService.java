package com.gamehub.server.match;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.game.caro.Caro;
import com.gamehub.server.match.Match.EndReason;
import com.gamehub.server.match.Match.Status;
import com.gamehub.server.match.MatchDtos.AssistEvent;
import com.gamehub.server.match.MatchDtos.CaroMoveEvent;
import com.gamehub.server.match.MatchDtos.ConnectionEvent;
import com.gamehub.server.match.MatchDtos.FinishRequest;
import com.gamehub.server.match.MatchDtos.MatchDto;
import com.gamehub.server.match.MatchDtos.PlayerDto;
import com.gamehub.server.match.MatchDtos.ProgressEvent;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserRepository;

import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

/**
 * Máy trạng thái của phòng đấu realtime:
 *
 * <pre>
 * WAITING_READY ──(hai người Sẵn sàng)──▶ COUNTDOWN ──(tới startAt)──▶ PLAYING ──▶ FINISHED
 *       │ hết hạn Sẵn sàng / rời phòng                    │ hết giờ, đầu hàng, rớt mạng quá lâu
 *       ▼                                                  ▼
 *   CANCELLED                                   FINISHED (TIMEOUT/FORFEIT/DISCONNECT) | ABANDONED
 * </pre>
 *
 * Mọi thời gian (bắt đầu, thời gian giải, hạn lượt Caro) do đồng hồ SERVER đo. Kết quả chỉ
 * được ghi nhận sau khi server kiểm tra lời giải ({@link MatchVerifier}) hoặc tự xử nước Caro.
 * Mỗi phòng được xử lý tuần tự bằng khoá riêng nên hai người bấm cùng lúc không gây lệch trạng thái.
 */
@Service
public class MatchService {

    public static final String SOURCE_INVITE = "INVITE";
    public static final String SOURCE_MATCHMAKING = "MATCHMAKING";

    static final int ELO_K = 32;
    static final Duration PROGRESS_THROTTLE = Duration.ofMillis(200);

    private static final Logger log = LoggerFactory.getLogger(MatchService.class);
    private static final TypeReference<Map<String, Object>> MAP = new TypeReference<>() {
    };

    private final MatchRepository matches;
    private final UserRatingRepository ratings;
    private final UserRepository users;
    private final MatchConfigFactory configs;
    private final PresenceService presence;
    private final RealtimeEvents events;
    private final ObjectMapper json;
    private final AppProperties props;
    private final Clock clock;
    private final TransactionTemplate tx;
    private final Map<UUID, Object> locks = new ConcurrentHashMap<>();
    private final Map<String, Instant> lastProgress = new ConcurrentHashMap<>();
    private final Object createLock = new Object();

    public MatchService(MatchRepository matches, UserRatingRepository ratings, UserRepository users,
            MatchConfigFactory configs, PresenceService presence, RealtimeEvents events, ObjectMapper json,
            AppProperties props, Clock clock, PlatformTransactionManager txm) {
        this.matches = matches;
        this.ratings = ratings;
        this.users = users;
        this.configs = configs;
        this.presence = presence;
        this.events = events;
        this.json = json;
        this.props = props;
        this.clock = clock;
        this.tx = new TransactionTemplate(txm);
    }

    // ------------------------------------------------------------------ tạo phòng

    /** Có đang ở trong một phòng chưa kết thúc không. */
    public boolean busy(UUID user) {
        return !matches.findForUser(user, Match.ACTIVE).isEmpty();
    }

    /** Tạo phòng cho A và B (từ lời mời được chấp nhận hoặc ghép trận). 409 nếu ai đó đang bận. */
    public MatchDto create(String game, String mode, UUID a, UUID b, String source) {
        MatchConfigFactory.validate(game, mode);
        synchronized (createLock) {
            MatchDto dto = tx.execute(s -> {
                if (busy(a) || busy(b)) {
                    throw ApiException.conflict("PLAYER_BUSY", "Một người chơi đang ở trong trận khác");
                }
                Instant now = Instant.now(clock);
                String config = json.writeValueAsString(configs.create(game, mode, a, b));
                Match m = matches.save(new Match(game, mode, source, a, b, config, now,
                        now.plus(props.online().readyTimeout())));
                MatchDto snap = snapshot(m);
                events.toUser(a, "match.created", snap);
                events.toUser(b, "match.created", snap);
                return snap;
            });
            presence.setInMatch(a, true);
            presence.setInMatch(b, true);
            log.info("Tạo trận {} {} {} ({})", dto.id(), game, mode, source);
            return dto;
        }
    }

    // ------------------------------------------------------------------ đọc

    public MatchDto get(UUID me, UUID id) {
        return tx.execute(s -> snapshot(participant(load(id), me)));
    }

    /** Phòng đang diễn ra của tôi (để khôi phục sau khi mất mạng / mở lại app), hoặc null. */
    public MatchDto active(UUID me) {
        return tx.execute(s -> matches.findForUser(me, Match.ACTIVE).stream().findFirst()
                .map(this::snapshot).orElse(null));
    }

    public List<MatchDto> history(UUID me, int limit) {
        return tx.execute(s -> {
            List<Match> list = matches.history(me, PageRequest.of(0, Math.clamp(limit, 1, 100)));
            Map<UUID, User> byId = loadUsers(list);
            return list.stream().map(m -> snapshot(m, byId)).toList();
        });
    }

    // ------------------------------------------------------------------ thao tác

    public MatchDto ready(UUID me, UUID id, boolean ready) {
        return locked(id, m -> {
            participant(m, me);
            if (m.getStatus() != Status.WAITING_READY) {
                if (ready && (m.getStatus() == Status.COUNTDOWN || m.getStatus() == Status.PLAYING)) {
                    return snapshot(m); // gửi lại sau khi mất mạng: idempotent
                }
                throw ApiException.conflict("MATCH_NOT_WAITING", "Phòng không còn chờ sẵn sàng");
            }
            m.setReady(me, ready);
            if (m.bothReady()) {
                Instant startAt = Instant.now(clock).plus(props.online().countdown());
                m.startCountdown(startAt);
                if (isCaro(m)) {
                    m.setTurnDeadline(startAt.plus(props.online().caroTurn()));
                }
            }
            return broadcastState(m);
        });
    }

    /** Tiến độ để hiển thị cho đối thủ (không ảnh hưởng thắng thua). Gửi quá dày thì bỏ qua. */
    public void progress(UUID me, UUID id, int progress) {
        Instant now = Instant.now(clock);
        String key = id + ":" + me;
        Instant last = lastProgress.get(key);
        if (last != null && last.plus(PROGRESS_THROTTLE).isAfter(now)) {
            return;
        }
        lastProgress.put(key, now);
        locked(id, m -> {
            participant(m, me);
            promote(m);
            if (m.getStatus() != Status.PLAYING || isCaro(m)) {
                return null;
            }
            int p = Math.clamp(progress, 0, 99); // 100 chỉ có khi server xác nhận đã giải
            m.setProgress(me, p);
            events.toMatch(m.getId(), "match.progress", new ProgressEvent(me, p));
            return null;
        });
    }

    /** Người chơi dùng gợi ý / tự giải: trận không còn tính xếp hạng, đối thủ được báo. */
    public MatchDto assist(UUID me, UUID id) {
        return locked(id, m -> {
            participant(m, me);
            if (!m.getStatus().active()) {
                return snapshot(m);
            }
            if (!m.assistedOf(me)) {
                m.markAssisted(me);
                events.toMatch(m.getId(), "match.assist", new AssistEvent(me));
            }
            return snapshot(m);
        });
    }

    /** Nộp lời giải. Hợp lệ → người nộp thắng ngay (người đến trước thắng). */
    public MatchDto finish(UUID me, UUID id, FinishRequest req) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            if (isCaro(m)) {
                throw ApiException.badRequest("WRONG_GAME", "Caro dùng nước đi, không nộp lời giải");
            }
            if (m.getStatus() != Status.PLAYING) {
                throw ApiException.conflict("MATCH_NOT_PLAYING", m.getStatus() == Status.FINISHED
                        ? "Trận đã kết thúc" : "Trận chưa bắt đầu");
            }
            Instant now = Instant.now(clock);
            long elapsed = Duration.between(m.getStartAt(), now).toMillis();
            String reject = MatchVerifier.verify(m.getGame(), config(m), req, elapsed);
            if (reject != null) {
                throw ApiException.unprocessable("RESULT_REJECTED", reject);
            }
            if (req.usedAssist() || MatchVerifier.usedPuzzleHints(req.drops())) {
                m.markAssisted(me);
            }
            m.setProgress(me, 100);
            m.setTime(me, elapsed);
            end(m, Status.FINISHED, EndReason.SOLVED, me);
            return broadcastState(m);
        });
    }

    /** Một nước Caro: server kiểm tra lượt, ô trống, thắng/hoà. */
    public MatchDto caroMove(UUID me, UUID id, int cell, int index) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            if (!isCaro(m)) {
                throw ApiException.badRequest("WRONG_GAME", "Chỉ Caro mới có nước đi theo lượt");
            }
            if (m.getStatus() != Status.PLAYING) {
                throw ApiException.conflict("MATCH_NOT_PLAYING", "Trận chưa bắt đầu hoặc đã kết thúc");
            }
            List<Integer> moves = m.caroMoveList();
            if (index != moves.size()) {
                throw ApiException.conflict("STALE_MOVE", "Bàn cờ đã thay đổi, hãy tải lại trạng thái");
            }
            UUID x = UUID.fromString((String) config(m).get("x"));
            UUID toMove = moves.size() % 2 == 0 ? x : m.opponentOf(x);
            if (!toMove.equals(me)) {
                throw ApiException.conflict("NOT_YOUR_TURN", "Chưa đến lượt bạn");
            }
            if (cell < 0 || cell >= Caro.CELLS) {
                throw ApiException.badRequest("INVALID_MOVE", "Ô không hợp lệ");
            }
            int[] board = new int[Caro.CELLS];
            for (int k = 0; k < moves.size(); k++) {
                board[moves.get(k)] = k % 2 == 0 ? Caro.X : Caro.O;
            }
            if (board[cell] != 0) {
                throw ApiException.conflict("CELL_TAKEN", "Ô đã có quân");
            }
            board[cell] = moves.size() % 2 == 0 ? Caro.X : Caro.O;
            Instant now = Instant.now(clock);
            m.addCaroMove(cell, now.plus(props.online().caroTurn()));
            events.toMatch(m.getId(), "match.caro.move",
                    new CaroMoveEvent(moves.size(), cell, me, m.getTurnDeadline()));
            if (Caro.isWinningMove(board, cell)) {
                m.setTime(me, Duration.between(m.getStartAt(), now).toMillis());
                end(m, Status.FINISHED, EndReason.CARO_WIN, me);
                return broadcastState(m);
            }
            if (moves.size() + 1 == Caro.CELLS) {
                end(m, Status.FINISHED, EndReason.DRAW, null);
                return broadcastState(m);
            }
            return snapshot(m);
        });
    }

    /** Rời phòng / đầu hàng. Trước khi bắt đầu: huỷ phòng. Đang chơi: đối thủ thắng. */
    public MatchDto forfeit(UUID me, UUID id) {
        return locked(id, m -> {
            participant(m, me);
            promote(m);
            switch (m.getStatus()) {
                case WAITING_READY, COUNTDOWN -> end(m, Status.CANCELLED, EndReason.CANCELLED, null);
                case PLAYING -> end(m, Status.FINISHED, EndReason.FORFEIT, m.opponentOf(me));
                default -> {
                    return snapshot(m);
                }
            }
            return broadcastState(m);
        });
    }

    // ------------------------------------------------------------------ hẹn giờ

    /** Mỗi giây: đếm ngược xong, hết hạn sẵn sàng, hết giờ lượt Caro, rớt mạng quá lâu. */
    @Scheduled(fixedDelayString = "PT1S", initialDelayString = "PT1S")
    public void tick() {
        Set<UUID> active = new HashSet<>();
        for (Match m : matches.findByStatusIn(Match.ACTIVE)) {
            active.add(m.getId());
            try {
                locked(m.getId(), this::sweep);
            } catch (RuntimeException e) {
                log.warn("Lỗi xử lý hẹn giờ trận {}: {}", m.getId(), e.toString());
            }
        }
        locks.keySet().retainAll(active);
        lastProgress.keySet().removeIf(k -> !active.contains(UUID.fromString(k.substring(0, 36))));
    }

    private Void sweep(Match m) {
        Instant now = Instant.now(clock);
        Duration grace = props.online().disconnectGrace();
        boolean aGone = gone(m.getPlayerA(), now, grace);
        boolean bGone = gone(m.getPlayerB(), now, grace);
        switch (m.getStatus()) {
            case WAITING_READY -> {
                if (now.isAfter(m.getReadyDeadline())) {
                    end(m, Status.CANCELLED, EndReason.READY_TIMEOUT, null);
                    broadcastState(m);
                } else if (aGone || bGone) {
                    end(m, Status.CANCELLED, EndReason.DISCONNECT, null);
                    broadcastState(m);
                }
            }
            case COUNTDOWN, PLAYING -> {
                if (promote(m)) {
                    broadcastState(m);
                }
                if (m.getStatus() != Status.PLAYING) {
                    return null;
                }
                if (aGone && bGone) {
                    end(m, Status.ABANDONED, EndReason.DISCONNECT, null);
                    broadcastState(m);
                } else if (aGone || bGone) {
                    end(m, Status.FINISHED, EndReason.DISCONNECT, aGone ? m.getPlayerB() : m.getPlayerA());
                    broadcastState(m);
                } else if (isCaro(m) && m.getTurnDeadline() != null && now.isAfter(m.getTurnDeadline())) {
                    UUID x = UUID.fromString((String) config(m).get("x"));
                    UUID toMove = m.caroMoveList().size() % 2 == 0 ? x : m.opponentOf(x);
                    end(m, Status.FINISHED, EndReason.TIMEOUT, m.opponentOf(toMove));
                    broadcastState(m);
                } else if (!isCaro(m) && now.isAfter(m.getStartAt().plus(props.online().maxRace()))) {
                    end(m, Status.FINISHED, EndReason.TIMEOUT, null);
                    broadcastState(m);
                }
            }
            default -> {
            }
        }
        return null;
    }

    private boolean gone(UUID user, Instant now, Duration grace) {
        return presence.disconnectedSince(user).map(t -> t.plus(grace).isBefore(now)).orElse(false);
    }

    /** Báo đối thủ khi một người mất / có lại kết nối (để hiện "Đối thủ đang kết nối lại…"). */
    @EventListener
    public void onConnectionChanged(PresenceService.ConnectionChanged e) {
        for (Match m : matches.findForUser(e.userId(), Match.ACTIVE)) {
            events.toMatch(m.getId(), "match.connection", new ConnectionEvent(e.userId(), e.connected()));
        }
    }

    // ------------------------------------------------------------------ nội bộ

    private <T> T locked(UUID id, Function<Match, T> work) {
        Object lock = locks.computeIfAbsent(id, k -> new Object());
        synchronized (lock) {
            return tx.execute(s -> work.apply(load(id)));
        }
    }

    private Match load(UUID id) {
        return matches.findById(id).orElseThrow(() -> ApiException.notFound("Không tìm thấy trận đấu"));
    }

    private static Match participant(Match m, UUID me) {
        if (!m.isPlayer(me)) {
            throw ApiException.forbidden("NOT_PARTICIPANT", "Bạn không ở trong trận này");
        }
        return m;
    }

    private static boolean isCaro(Match m) {
        return "caro".equals(m.getGame());
    }

    /** COUNTDOWN → PLAYING khi đã tới startAt. */
    private boolean promote(Match m) {
        if (m.getStatus() == Status.COUNTDOWN && !Instant.now(clock).isBefore(m.getStartAt())) {
            m.play();
            return true;
        }
        return false;
    }

    private void end(Match m, Status status, EndReason reason, UUID winner) {
        Instant now = Instant.now(clock);
        m.end(status, reason, winner, now);
        boolean rated = status == Status.FINISHED && !m.anyAssisted()
                && (winner != null || reason == EndReason.DRAW);
        m.setRated(rated);
        if (rated) {
            updateRatings(m, winner, now);
        }
        presence.setInMatch(m.getPlayerA(), false);
        presence.setInMatch(m.getPlayerB(), false);
        log.info("Trận {} kết thúc: {} {} thắng={}", m.getId(), status, reason, winner);
    }

    private void updateRatings(Match m, UUID winner, Instant now) {
        UserRating ra = ratings.find(m.getPlayerA(), m.getGame())
                .orElseGet(() -> new UserRating(m.getPlayerA(), m.getGame(), now));
        UserRating rb = ratings.find(m.getPlayerB(), m.getGame())
                .orElseGet(() -> new UserRating(m.getPlayerB(), m.getGame(), now));
        double scoreA = winner == null ? 0.5 : winner.equals(m.getPlayerA()) ? 1 : 0;
        int[] next = elo(ra.getRating(), rb.getRating(), scoreA);
        ra.record(next[0], scoreA == 1, now);
        rb.record(next[1], scoreA == 0, now);
        ratings.save(ra);
        ratings.save(rb);
    }

    /** Elo chuẩn, K = 32. */
    static int[] elo(int a, int b, double scoreA) {
        double expectedA = 1 / (1 + Math.pow(10, (b - a) / 400.0));
        int delta = (int) Math.round(ELO_K * (scoreA - expectedA));
        return new int[] {a + delta, b - delta};
    }

    private MatchDto broadcastState(Match m) {
        MatchDto dto = snapshot(m);
        events.toMatch(m.getId(), "match.state", dto);
        if (!m.getStatus().active()) {
            // Người đã rời màn hình phòng vẫn nhận kết quả qua hàng đợi riêng.
            events.toUser(m.getPlayerA(), "match.ended", dto);
            events.toUser(m.getPlayerB(), "match.ended", dto);
        }
        return dto;
    }

    Map<String, Object> config(Match m) {
        return json.readValue(m.getConfig(), MAP);
    }

    private MatchDto snapshot(Match m) {
        return snapshot(m, loadUsers(List.of(m)));
    }

    private Map<UUID, User> loadUsers(List<Match> list) {
        Set<UUID> ids = new HashSet<>();
        for (Match m : list) {
            ids.add(m.getPlayerA());
            ids.add(m.getPlayerB());
        }
        return users.findAllById(ids).stream().collect(Collectors.toMap(User::getId, Function.identity()));
    }

    private MatchDto snapshot(Match m, Map<UUID, User> byId) {
        List<PlayerDto> players = new ArrayList<>(2);
        for (UUID p : List.of(m.getPlayerA(), m.getPlayerB())) {
            User u = byId.get(p);
            UserSummaryDto summary = u == null ? new UserSummaryDto(p, "?", "Người chơi", 0) : UserSummaryDto.of(u);
            players.add(new PlayerDto(summary, m.isA(p) ? "A" : "B", m.readyOf(p), m.progressOf(p),
                    m.assistedOf(p), m.timeOf(p), presence.isConnected(p)));
        }
        return new MatchDto(m.getId(), m.getGame(), m.getMode(), m.getSource(), m.getStatus(), config(m), players,
                m.getCreatedAt(), m.getReadyDeadline(), m.getStartAt(), m.getFinishedAt(), m.getWinnerId(),
                m.getEndReason(), m.isRated(), m.caroMoveList(), m.getTurnDeadline(), Instant.now(clock));
    }
}
