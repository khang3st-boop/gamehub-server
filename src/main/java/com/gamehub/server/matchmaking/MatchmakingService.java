package com.gamehub.server.matchmaking;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import jakarta.validation.constraints.NotBlank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.match.MatchConfigFactory;
import com.gamehub.server.match.MatchDtos.MatchDto;
import com.gamehub.server.match.MatchService;
import com.gamehub.server.match.UserRating;
import com.gamehub.server.match.UserRatingRepository;
import com.gamehub.server.presence.PresenceService;
import com.gamehub.server.realtime.RealtimeEvents;
import com.gamehub.server.user.UserService;

/**
 * Ghép trận online theo: game + chế độ, trạng thái sẵn sàng (đang trong hàng chờ và có kết nối),
 * vùng thô, điểm xếp hạng, thời gian chờ và quan hệ chặn.
 * <ul>
 * <li>Mặc định chỉ ghép CÙNG VÙNG. Chỉ khi người chơi bật "mở rộng" mới xét vùng kề (sau 20 giây)
 * rồi mọi vùng (sau 40 giây).</li>
 * <li>Cửa sổ chênh điểm bắt đầu ±150 và nới thêm 10 điểm mỗi giây chờ (tối đa ±800).</li>
 * <li>Vé chờ hết hạn sau {@code queueTtl} (mặc định 3 phút) — không theo dõi liên tục.</li>
 * </ul>
 */
@Service
public class MatchmakingService {

    public record QueueRequest(@NotBlank String game, @NotBlank String mode, @NotBlank String region,
            boolean widen) {
    }

    public record TicketDto(String game, String mode, String region, boolean widen, int rating,
            Instant queuedAt, Instant expiresAt, int waitingInRegion) {
    }

    public record FoundEvent(UUID matchId, MatchDto match) {
    }

    record Ticket(UUID user, String game, String mode, String region, boolean widen, int rating, Instant queuedAt,
            Instant expiresAt) {

        long waitSeconds(Instant now) {
            return Duration.between(queuedAt, now).toSeconds();
        }

        int allowedTier(Instant now) {
            if (Regions.ANY.equals(region)) {
                return 2;
            }
            if (!widen) {
                return 0;
            }
            long w = waitSeconds(now);
            return w >= WIDEN_ALL_AFTER_S ? 2 : w >= WIDEN_NEIGHBOUR_AFTER_S ? 1 : 0;
        }

        int ratingWindow(Instant now) {
            return (int) Math.min(MAX_WINDOW, BASE_WINDOW + WINDOW_PER_SECOND * waitSeconds(now));
        }
    }

    static final int BASE_WINDOW = 150;
    static final int WINDOW_PER_SECOND = 10;
    static final int MAX_WINDOW = 800;
    static final long WIDEN_NEIGHBOUR_AFTER_S = 20;
    static final long WIDEN_ALL_AFTER_S = 40;

    private static final Logger log = LoggerFactory.getLogger(MatchmakingService.class);

    private final Map<UUID, Ticket> queue = new ConcurrentHashMap<>();
    private final MatchService matches;
    private final UserRatingRepository ratings;
    private final UserService users;
    private final PresenceService presence;
    private final RealtimeEvents events;
    private final RateLimiter limiter;
    private final AppProperties props;
    private final Clock clock;

    public MatchmakingService(MatchService matches, UserRatingRepository ratings, UserService users,
            PresenceService presence, RealtimeEvents events, RateLimiter limiter, AppProperties props, Clock clock) {
        this.matches = matches;
        this.ratings = ratings;
        this.users = users;
        this.presence = presence;
        this.events = events;
        this.limiter = limiter;
        this.props = props;
        this.clock = clock;
    }

    public TicketDto join(UUID me, QueueRequest req) {
        MatchConfigFactory.validate(req.game(), req.mode());
        if (!Regions.valid(req.region())) {
            throw ApiException.badRequest("INVALID_REGION", "Mã vùng không hợp lệ — xem GET /api/v1/matchmaking/regions");
        }
        if (matches.busy(me)) {
            throw ApiException.conflict("PLAYER_BUSY", "Bạn đang ở trong một trận khác");
        }
        limiter.hit("mm:" + me, 30, Duration.ofMinutes(10));
        int rating = ratings.find(me, req.game()).map(UserRating::getRating).orElse(UserRating.INITIAL);
        Instant now = Instant.now(clock);
        Ticket t = new Ticket(me, req.game(), req.mode(), req.region(), req.widen(), rating, now,
                now.plus(props.online().queueTtl()));
        synchronized (queue) {
            queue.put(me, t);
        }
        presence.setReady(me, true);
        return dto(t);
    }

    public void leave(UUID me) {
        synchronized (queue) {
            queue.remove(me);
        }
        presence.setReady(me, false);
    }

    /** Vé chờ hiện tại, hoặc null. */
    public TicketDto ticket(UUID me) {
        Ticket t = queue.get(me);
        return t == null ? null : dto(t);
    }

    @Scheduled(fixedDelayString = "PT1S", initialDelayString = "PT1S")
    public void tick() {
        Instant now = Instant.now(clock);
        List<Ticket[]> pairs = new ArrayList<>();
        synchronized (queue) {
            for (Ticket t : List.copyOf(queue.values())) {
                // Rớt mạng quá 15 giây mới tính là đã rời (cho phép nối lại nhanh).
            boolean gone = presence.disconnectedSince(t.user()).map(at -> at.plusSeconds(15).isBefore(now)).orElse(false);
                if (now.isAfter(t.expiresAt()) || gone) {
                    queue.remove(t.user());
                    presence.setReady(t.user(), false);
                    events.toUser(t.user(), "matchmaking.expired", dto(t));
                }
            }
            List<Ticket> waiting = new ArrayList<>(queue.values());
            waiting.sort(Comparator.comparing(Ticket::queuedAt));
            for (int i = 0; i < waiting.size(); i++) {
                Ticket a = waiting.get(i);
                if (!queue.containsKey(a.user())) {
                    continue;
                }
                Ticket best = null;
                long bestScore = Long.MAX_VALUE;
                for (int j = i + 1; j < waiting.size(); j++) {
                    Ticket b = waiting.get(j);
                    if (!queue.containsKey(b.user()) || !compatible(a, b, now)) {
                        continue;
                    }
                    long score = Regions.tier(a.region(), b.region()) * 10_000L + Math.abs(a.rating() - b.rating());
                    if (score < bestScore) {
                        bestScore = score;
                        best = b;
                    }
                }
                if (best != null) {
                    queue.remove(a.user());
                    queue.remove(best.user());
                    pairs.add(new Ticket[] {a, best});
                }
            }
        }
        for (Ticket[] p : pairs) {
            start(p[0], p[1]);
        }
    }

    boolean compatible(Ticket a, Ticket b, Instant now) {
        if (a.user().equals(b.user()) || !a.game().equals(b.game()) || !a.mode().equals(b.mode())) {
            return false;
        }
        int tier = Regions.tier(a.region(), b.region());
        if (tier > a.allowedTier(now) || tier > b.allowedTier(now)) {
            return false;
        }
        int window = Math.min(a.ratingWindow(now), b.ratingWindow(now));
        if (Math.abs(a.rating() - b.rating()) > window) {
            return false;
        }
        return !users.blockedEitherWay(a.user(), b.user());
    }

    private void start(Ticket a, Ticket b) {
        presence.setReady(a.user(), false);
        presence.setReady(b.user(), false);
        try {
            MatchDto m = matches.create(a.game(), a.mode(), a.user(), b.user(), MatchService.SOURCE_MATCHMAKING);
            events.toUser(a.user(), "matchmaking.found", new FoundEvent(m.id(), m));
            events.toUser(b.user(), "matchmaking.found", new FoundEvent(m.id(), m));
        } catch (RuntimeException e) {
            log.warn("Không tạo được trận ghép: {}", e.toString());
            events.toUser(a.user(), "matchmaking.expired", dto(a));
            events.toUser(b.user(), "matchmaking.expired", dto(b));
        }
    }

    private TicketDto dto(Ticket t) {
        int same = (int) queue.values().stream()
                .filter(o -> !o.user().equals(t.user()) && o.game().equals(t.game()) && o.region().equals(t.region()))
                .count();
        return new TicketDto(t.game(), t.mode(), t.region(), t.widen(), t.rating(), t.queuedAt(), t.expiresAt(), same);
    }
}
