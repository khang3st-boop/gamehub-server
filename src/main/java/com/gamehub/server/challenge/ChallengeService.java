package com.gamehub.server.challenge;

import java.security.SecureRandom;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.challenge.ChallengeDtos.ChallengeDto;
import com.gamehub.server.challenge.ChallengeDtos.ChallengeEntryDto;
import com.gamehub.server.challenge.ChallengeDtos.CreateChallengeRequest;
import com.gamehub.server.challenge.ChallengeDtos.SubmitChallengeRequest;
import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.common.Text;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.game.rubik.CubieCube;
import com.gamehub.server.game.rubik.RubikController;
import com.gamehub.server.result.ResultVerifier;
import com.gamehub.server.user.BlockRepository;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

/**
 * Luồng thử thách: tạo (server sinh scramble) → nhận → mỗi bên nộp lời giải một lần → server xác định người thắng.
 * Hết hạn được áp dụng "lười" khi đọc và bởi tác vụ định kỳ.
 */
@Service
public class ChallengeService {

    private static final Logger log = LoggerFactory.getLogger(ChallengeService.class);
    static final int MAX_OPEN_PER_USER = 20;

    private final ChallengeRepository challenges;
    private final UserRepository users;
    private final UserService userService;
    private final BlockRepository blocks;
    private final RateLimiter limiter;
    private final AppProperties props;
    private final Clock clock;
    private final SecureRandom random = new SecureRandom();

    public ChallengeService(ChallengeRepository challenges, UserRepository users, UserService userService,
            BlockRepository blocks, RateLimiter limiter, AppProperties props, Clock clock) {
        this.challenges = challenges;
        this.users = users;
        this.userService = userService;
        this.blocks = blocks;
        this.limiter = limiter;
        this.props = props;
        this.clock = clock;
    }

    @Transactional
    public ChallengeDto create(UUID me, CreateChallengeRequest req) {
        limiter.hit("challenge:" + me, 30, Duration.ofHours(1));
        userService.me(me);
        if (req.opponentId() != null) {
            if (req.opponentId().equals(me)) {
                throw ApiException.badRequest("INVALID_TARGET", "Không thể thách đấu chính mình");
            }
            userService.require(req.opponentId());
            if (userService.blockedEitherWay(me, req.opponentId())) {
                throw ApiException.forbidden("BLOCKED", "Không thể thách đấu người chơi này");
            }
        }
        if (challenges.countOpenBy(me) >= MAX_OPEN_PER_USER) {
            throw ApiException.conflict("TOO_MANY_OPEN", "Bạn đang có quá nhiều thử thách chờ nhận");
        }
        Instant now = Instant.now(clock);
        String scramble = CubieCube.Move.format(CubieCube.scramble(random, RubikController.SCRAMBLE_LENGTH));
        Challenge c = new Challenge(me, req.opponentId(), scramble, req.allowAssist(), Text.clean(req.message()),
                now, now.plus(props.challenge().ttl()));
        return toDto(challenges.save(c));
    }

    @Transactional
    public List<ChallengeDto> mine(UUID me) {
        return toDtos(expire(challenges.mine(me, PageRequest.of(0, 50))));
    }

    @Transactional(readOnly = true)
    public List<ChallengeDto> open(UUID me) {
        Set<UUID> hidden = new HashSet<>(blocks.relatedTo(me));
        return toDtos(challenges.open(me, Instant.now(clock), PageRequest.of(0, 50)).stream()
                .filter(c -> !hidden.contains(c.getCreatorId()))
                .toList());
    }

    @Transactional
    public ChallengeDto get(UUID me, UUID id) {
        Challenge c = load(id);
        if (!c.isParticipant(me) && !(c.getOpponentId() == null && c.getStatus() == Challenge.Status.OPEN)) {
            throw ApiException.notFound("Không tìm thấy thử thách");
        }
        return toDto(c);
    }

    @Transactional
    public ChallengeDto accept(UUID me, UUID id) {
        Challenge c = load(id);
        if (c.getCreatorId().equals(me)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể tự nhận thử thách của mình");
        }
        if (c.getOpponentId() != null && !c.getOpponentId().equals(me)) {
            throw ApiException.notFound("Không tìm thấy thử thách");
        }
        requireStatus(c, Challenge.Status.OPEN);
        if (userService.blockedEitherWay(me, c.getCreatorId())) {
            throw ApiException.forbidden("BLOCKED", "Không thể nhận thử thách của người chơi này");
        }
        c.accept(me, Instant.now(clock));
        return toDto(challenges.saveAndFlush(c));
    }

    /** Người được mời từ chối, hoặc người tạo huỷ khi chưa có ai nhận. */
    @Transactional
    public ChallengeDto decline(UUID me, UUID id) {
        Challenge c = load(id);
        if (!c.isParticipant(me)) {
            throw ApiException.notFound("Không tìm thấy thử thách");
        }
        requireStatus(c, Challenge.Status.OPEN);
        c.decline(Instant.now(clock));
        return toDto(challenges.saveAndFlush(c));
    }

    @Transactional
    public ChallengeDto submit(UUID me, UUID id, SubmitChallengeRequest req) {
        Challenge c = load(id);
        if (!c.isParticipant(me)) {
            throw ApiException.notFound("Không tìm thấy thử thách");
        }
        if (c.hasSubmitted(me)) {
            if (req.clientId().equals(c.submittedClientId(me))) {
                return toDto(c); // gửi lại do mạng chập chờn: idempotent
            }
            throw ApiException.conflict("ALREADY_SUBMITTED", "Bạn đã nộp bài cho thử thách này");
        }
        boolean creator = c.getCreatorId().equals(me);
        if (!(c.getStatus() == Challenge.Status.ACCEPTED
                || (creator && c.getStatus() == Challenge.Status.OPEN))) {
            throw ApiException.conflict("INVALID_STATE", stateMessage(c));
        }
        if (req.assisted() && !c.isAllowAssist()) {
            throw ApiException.unprocessable("ASSIST_NOT_ALLOWED", "Thử thách này không cho phép dùng trợ giúp");
        }
        List<CubieCube.Move> moves;
        try {
            moves = ResultVerifier.replayRubik(c.getScramble(), req.solution());
        } catch (ResultVerifier.Rejected e) {
            throw ApiException.unprocessable("SOLUTION_REJECTED", e.getMessage());
        }
        if (moves.size() != req.moves()) {
            throw ApiException.unprocessable("SOLUTION_REJECTED", "Số nước không khớp với lời giải");
        }
        if (!req.assisted() && req.durationMs() < Math.max(1000L, 70L * moves.size())) {
            throw ApiException.unprocessable("SOLUTION_REJECTED", "Thời gian giải nhanh bất thường so với số nước");
        }
        c.submit(me, req.clientId(), req.durationMs(), moves.size(), req.assisted(),
                CubieCube.Move.format(moves), Instant.now(clock));
        return toDto(challenges.saveAndFlush(c));
    }

    @Scheduled(fixedDelayString = "PT5M", initialDelayString = "PT1M")
    @Transactional
    public void sweepExpired() {
        List<Challenge> due = challenges.due(Instant.now(clock), PageRequest.of(0, 500));
        if (!due.isEmpty()) {
            expire(due);
            log.info("Đã chuyển {} thử thách quá hạn", due.size());
        }
    }

    private Challenge load(UUID id) {
        Challenge c = challenges.findById(id)
                .orElseThrow(() -> ApiException.notFound("Không tìm thấy thử thách"));
        if (c.expireIfDue(Instant.now(clock))) {
            challenges.save(c);
        }
        return c;
    }

    private List<Challenge> expire(List<Challenge> list) {
        Instant now = Instant.now(clock);
        for (Challenge c : list) {
            if (c.expireIfDue(now)) {
                challenges.save(c);
            }
        }
        return list;
    }

    private static void requireStatus(Challenge c, Challenge.Status expected) {
        if (c.getStatus() != expected) {
            throw ApiException.conflict("INVALID_STATE", stateMessage(c));
        }
    }

    private static String stateMessage(Challenge c) {
        return switch (c.getStatus()) {
            case EXPIRED -> "Thử thách đã hết hạn";
            case DECLINED -> "Thử thách đã bị từ chối hoặc huỷ";
            case COMPLETED -> "Thử thách đã kết thúc";
            case ACCEPTED -> "Thử thách đã có người nhận";
            case OPEN -> "Thử thách chưa được nhận";
        };
    }

    private ChallengeDto toDto(Challenge c) {
        return toDtos(List.of(c)).get(0);
    }

    private List<ChallengeDto> toDtos(List<Challenge> list) {
        Set<UUID> ids = new HashSet<>();
        for (Challenge c : list) {
            ids.add(c.getCreatorId());
            if (c.getOpponentId() != null) {
                ids.add(c.getOpponentId());
            }
        }
        Map<UUID, User> byId = users.findAllById(ids).stream()
                .collect(Collectors.toMap(User::getId, Function.identity()));
        return list.stream().map(c -> new ChallengeDto(
                c.getId(),
                c.getScramble(),
                c.getStatus().name(),
                c.isAllowAssist(),
                entry(byId.get(c.getCreatorId()), c.getCreatorId(), c.creatorEntry(), c.getCreatorSubmittedAt()),
                c.getOpponentId() == null ? null
                        : entry(byId.get(c.getOpponentId()), c.getOpponentId(), c.opponentEntry(),
                                c.getOpponentSubmittedAt()),
                c.getWinnerId(),
                c.getCreatedAt(),
                c.getExpiresAt(),
                c.getMessage())).toList();
    }

    private static ChallengeEntryDto entry(User u, UUID id, Challenge.Entry e, Instant submittedAt) {
        String name = u == null ? "Người chơi đã xoá" : u.getDisplayName();
        int color = u == null ? 0 : u.getAvatarColor();
        return e == null
                ? new ChallengeEntryDto(id, name, color, null, null, null, null)
                : new ChallengeEntryDto(id, name, color, e.durationMs(), e.moves(), e.assisted(), submittedAt);
    }
}
