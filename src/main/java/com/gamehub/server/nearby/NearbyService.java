package com.gamehub.server.nearby;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
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

import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.nearby.NearbyDtos.NearbyPlayerDto;
import com.gamehub.server.nearby.NearbyDtos.PresenceDto;
import com.gamehub.server.nearby.NearbyDtos.PresenceRequest;
import com.gamehub.server.user.BlockRepository;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

/**
 * "Người chơi gần đây" theo nguyên tắc tối thiểu dữ liệu:
 * <ul>
 * <li>chỉ hoạt động khi người dùng tự bật (PUT presence), tắt là xoá ngay (DELETE);</li>
 * <li>chỉ lưu ô lưới 0,01°, tự hết hạn sau {@code gamehub.nearby.presence-ttl};</li>
 * <li>chỉ trả khoảng cách theo nhóm và thời điểm làm tròn 5 phút; phải tự chia sẻ mới được xem người khác;</li>
 * <li>giới hạn số lần cập nhật để khó dò toạ độ bằng cách "đổi vị trí giả" liên tục.</li>
 * </ul>
 */
@Service
public class NearbyService {

    private static final Logger log = LoggerFactory.getLogger(NearbyService.class);
    static final double CELL = 0.01;
    static final double EARTH_RADIUS_KM = 6371.0;
    static final int MAX_RESULTS = 50;
    private static final Duration LAST_SEEN_STEP = Duration.ofMinutes(5);

    private final PresenceRepository presence;
    private final UserRepository users;
    private final UserService userService;
    private final BlockRepository blocks;
    private final RateLimiter limiter;
    private final AppProperties props;
    private final Clock clock;

    public NearbyService(PresenceRepository presence, UserRepository users, UserService userService,
            BlockRepository blocks, RateLimiter limiter, AppProperties props, Clock clock) {
        this.presence = presence;
        this.users = users;
        this.userService = userService;
        this.blocks = blocks;
        this.limiter = limiter;
        this.props = props;
        this.clock = clock;
    }

    @Transactional
    public PresenceDto update(UUID me, PresenceRequest req) {
        userService.me(me);
        limiter.hit("presence:" + me, 20, Duration.ofHours(1));
        Instant now = Instant.now(clock);
        Instant expires = now.plus(props.nearby().presenceTtl());
        Presence p = presence.findById(me).orElseGet(() -> new Presence(me));
        p.update(snap(req.lat()), snap(req.lon()), now, expires);
        presence.save(p);
        return new PresenceDto(expires);
    }

    @Transactional
    public void clear(UUID me) {
        presence.deleteById(me);
    }

    @Transactional(readOnly = true)
    public List<NearbyPlayerDto> players(UUID me, int radiusKm) {
        int radius = Math.clamp(radiusKm, 1, props.nearby().maxRadiusKm());
        Instant now = Instant.now(clock);
        Presence mine = presence.findById(me).filter(p -> p.getExpiresAt().isAfter(now))
                .orElseThrow(() -> ApiException.conflict("PRESENCE_REQUIRED",
                        "Hãy bật chia sẻ vị trí gần đúng để xem người chơi gần bạn"));
        double lat = mine.getCellLat();
        double lon = mine.getCellLon();
        double dLat = radius / 111.0 + CELL;
        double cos = Math.max(0.01, Math.cos(Math.toRadians(lat)));
        double dLon = Math.min(180, radius / (111.32 * cos) + CELL);
        List<Presence> candidates = presence.inBox(me, now, lat - dLat, lat + dLat, lon - dLon, lon + dLon,
                PageRequest.of(0, 500));
        Set<UUID> hidden = new HashSet<>(blocks.relatedTo(me));
        record Hit(Presence p, double km) {
        }
        List<Hit> hits = new ArrayList<>();
        for (Presence p : candidates) {
            if (hidden.contains(p.getUserId())) {
                continue;
            }
            double km = distanceKm(lat, lon, p.getCellLat(), p.getCellLon());
            if (km <= radius) {
                hits.add(new Hit(p, km));
            }
        }
        hits.sort(Comparator.comparingDouble(Hit::km));
        List<Hit> top = hits.subList(0, Math.min(MAX_RESULTS, hits.size()));
        Map<UUID, User> byId = users.findAllById(top.stream().map(h -> h.p().getUserId()).toList()).stream()
                .collect(Collectors.toMap(User::getId, Function.identity()));
        List<NearbyPlayerDto> out = new ArrayList<>();
        for (Hit h : top) {
            User u = byId.get(h.p().getUserId());
            if (u != null) {
                out.add(new NearbyPlayerDto(u.getId(), u.getDisplayName(), u.getAvatarColor(), bucket(h.km()),
                        coarse(h.p().getUpdatedAt())));
            }
        }
        return out;
    }

    @Scheduled(fixedDelayString = "PT5M", initialDelayString = "PT1M")
    @Transactional
    public void purgeExpired() {
        int n = presence.deleteExpired(Instant.now(clock));
        if (n > 0) {
            log.debug("Đã xoá {} vị trí hết hạn", n);
        }
    }

    /** Làm tròn về tâm ô lưới 0,01°. */
    static double snap(double v) {
        return Math.round(v / CELL) * CELL;
    }

    static String bucket(double km) {
        if (km < 2) {
            return "< 2 km";
        }
        if (km < 5) {
            return "2–5 km";
        }
        if (km < 10) {
            return "5–10 km";
        }
        if (km < 25) {
            return "10–25 km";
        }
        return "25–50 km";
    }

    static Instant coarse(Instant t) {
        long step = LAST_SEEN_STEP.toMillis();
        return Instant.ofEpochMilli(t.toEpochMilli() / step * step);
    }

    /** Khoảng cách Haversine (km). */
    static double distanceKm(double lat1, double lon1, double lat2, double lon2) {
        double p1 = Math.toRadians(lat1);
        double p2 = Math.toRadians(lat2);
        double dp = p2 - p1;
        double dl = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dp / 2) * Math.sin(dp / 2)
                + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) * Math.sin(dl / 2);
        return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(a)));
    }
}
