package com.gamehub.server.presence;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.gamehub.server.config.AppProperties;
import com.gamehub.server.friends.FriendshipRepository;
import com.gamehub.server.realtime.RealtimeEvents;

/**
 * Trạng thái trực tuyến, lưu trong bộ nhớ (một instance server). Nguồn sự thật là các kết nối
 * WebSocket: có ít nhất một kết nối = online. Mất hết kết nối thì vẫn hiển thị online thêm
 * {@link #OFFLINE_GRACE} (đổi mạng, tải lại trang) rồi mới chuyển OFFLINE.
 * Chỉ bạn bè (đã chấp nhận) nhận sự kiện {@code presence}.
 */
@Service
public class PresenceService {

    public enum Status {
        ONLINE, READY, IN_MATCH, OFFLINE
    }

    /** Sự kiện nội bộ khi người dùng mất / có lại kết nối (phòng đấu dùng để xử lý rớt mạng). */
    static final java.time.Duration LOST_RETENTION = java.time.Duration.ofHours(6);

    public record ConnectionChanged(UUID userId, boolean connected) {
    }

    public record PresenceDto(UUID userId, Status status) {
    }

    static final Duration OFFLINE_GRACE = Duration.ofSeconds(15);

    private final Map<UUID, Set<String>> sessions = new ConcurrentHashMap<>();
    private final Map<UUID, Instant> disconnectedAt = new ConcurrentHashMap<>();
    /** Mốc mất kết nối, giữ tới khi kết nối lại (phòng đấu dùng để tính ân hạn rớt mạng). */
    private final Map<UUID, Instant> lostAt = new ConcurrentHashMap<>();
    private final Map<UUID, Instant> readyUntil = new ConcurrentHashMap<>();
    private final Set<UUID> inMatch = ConcurrentHashMap.newKeySet();
    private final Map<UUID, Status> announced = new ConcurrentHashMap<>();

    private final FriendshipRepository friendships;
    private final RealtimeEvents events;
    private final ApplicationEventPublisher publisher;
    private final AppProperties props;
    private final Clock clock;

    public PresenceService(FriendshipRepository friendships, RealtimeEvents events,
            ApplicationEventPublisher publisher, AppProperties props, Clock clock) {
        this.friendships = friendships;
        this.events = events;
        this.publisher = publisher;
        this.props = props;
        this.clock = clock;
    }

    public void connected(UUID user, String sessionId) {
        Set<String> set = sessions.computeIfAbsent(user, k -> ConcurrentHashMap.newKeySet());
        boolean first = set.isEmpty();
        set.add(sessionId);
        disconnectedAt.remove(user);
        lostAt.remove(user);
        if (first) {
            publisher.publishEvent(new ConnectionChanged(user, true));
        }
        announce(user);
    }

    public void disconnected(UUID user, String sessionId) {
        Set<String> set = sessions.get(user);
        if (set == null || !set.remove(sessionId)) {
            return;
        }
        if (set.isEmpty()) {
            sessions.remove(user, set);
            disconnectedAt.put(user, Instant.now(clock));
            lostAt.put(user, Instant.now(clock));
            publisher.publishEvent(new ConnectionChanged(user, false));
        }
    }

    public boolean isConnected(UUID user) {
        Set<String> set = sessions.get(user);
        return set != null && !set.isEmpty();
    }

    /** Thời điểm mất kết nối cuối cùng (rỗng nếu đang kết nối hoặc chưa từng kết nối). */
    public Optional<Instant> disconnectedSince(UUID user) {
        return isConnected(user) ? Optional.empty() : Optional.ofNullable(lostAt.get(user));
    }

    public Status status(UUID user) {
        boolean online = isConnected(user) || disconnectedAt.containsKey(user);
        if (!online) {
            return Status.OFFLINE;
        }
        if (inMatch.contains(user)) {
            return Status.IN_MATCH;
        }
        Instant until = readyUntil.get(user);
        if (until != null && until.isAfter(Instant.now(clock))) {
            return Status.READY;
        }
        return Status.ONLINE;
    }

    /** Bật/tắt "Sẵn sàng thách đấu"; tự hết hạn sau {@code gamehub.online.ready-status-ttl}. */
    public PresenceDto setReady(UUID user, boolean ready) {
        if (ready) {
            readyUntil.put(user, Instant.now(clock).plus(props.online().readyStatusTtl()));
        } else {
            readyUntil.remove(user);
        }
        announce(user);
        return new PresenceDto(user, status(user));
    }

    public Optional<Instant> readyUntil(UUID user) {
        return Optional.ofNullable(readyUntil.get(user)).filter(t -> t.isAfter(Instant.now(clock)));
    }

    public void setInMatch(UUID user, boolean value) {
        if (value ? inMatch.add(user) : inMatch.remove(user)) {
            announce(user);
        }
    }

    /** Đăng xuất: quên trạng thái sẵn sàng; kết nối WebSocket sẽ tự đóng ở client. */
    public void forget(UUID user) {
        readyUntil.remove(user);
        announce(user);
    }

    @Scheduled(fixedDelayString = "PT2S", initialDelayString = "PT2S")
    public void sweep() {
        Instant now = Instant.now(clock);
        disconnectedAt.forEach((user, at) -> {
            if (!isConnected(user) && at.plus(OFFLINE_GRACE).isBefore(now)
                    && disconnectedAt.remove(user, at)) {
                readyUntil.remove(user);
                announce(user);
            }
        });
        lostAt.entrySet().removeIf(e -> e.getValue().plus(LOST_RETENTION).isBefore(now));
        readyUntil.forEach((user, until) -> {
            if (!until.isAfter(now) && readyUntil.remove(user, until)) {
                announce(user);
            }
        });
    }

    /** Gửi trạng thái mới cho bạn bè nếu khác lần trước. */
    private void announce(UUID user) {
        Status now = status(user);
        Status before = announced.put(user, now);
        if (now == Status.OFFLINE) {
            announced.remove(user);
        }
        if (now == before || before == null && now == Status.OFFLINE) {
            return;
        }
        PresenceDto dto = new PresenceDto(user, now);
        events.toUser(user, "presence.self", dto);
        for (UUID friend : friendships.friendIds(user)) {
            if (isConnected(friend)) {
                events.toUser(friend, "presence", dto);
            }
        }
    }
}
