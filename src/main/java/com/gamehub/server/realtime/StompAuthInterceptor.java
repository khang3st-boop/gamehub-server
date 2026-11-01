package com.gamehub.server.realtime;

import java.time.Clock;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.stereotype.Component;

import com.gamehub.server.match.MatchRepository;

/**
 * Bảo vệ kênh STOMP:
 * <ul>
 * <li>CONNECT bắt buộc header {@code Authorization: Bearer <access token>} hợp lệ. Danh tính lấy
 * từ token nên client không tự khai được người gửi (chống giả danh);</li>
 * <li>SUBSCRIBE chỉ được vào hàng đợi riêng {@code /user/queue/**} hoặc kênh phòng đấu mà mình
 * là người chơi;</li>
 * <li>SEND tối đa {@value #MAX_FRAMES_PER_SECOND} khung/giây mỗi kết nối.</li>
 * </ul>
 */
@Component
public class StompAuthInterceptor implements ChannelInterceptor {

    static final int MAX_FRAMES_PER_SECOND = 20;

    private final JwtDecoder jwtDecoder;
    private final MatchRepository matches;
    private final Clock clock;
    private final Map<String, long[]> rate = new ConcurrentHashMap<>();

    public StompAuthInterceptor(JwtDecoder jwtDecoder, MatchRepository matches, Clock clock) {
        this.jwtDecoder = jwtDecoder;
        this.matches = matches;
        this.clock = clock;
    }

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor acc = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
        if (acc == null || acc.getCommand() == null) {
            return message;
        }
        switch (acc.getCommand()) {
            case CONNECT, STOMP -> acc.setUser(authenticate(acc));
            case SUBSCRIBE -> authorizeSubscribe(acc);
            case SEND -> {
                requireUser(acc);
                throttle(acc.getSessionId());
            }
            case DISCONNECT -> {
                if (acc.getSessionId() != null) {
                    rate.remove(acc.getSessionId());
                }
            }
            default -> {
            }
        }
        return message;
    }

    private UserPrincipal authenticate(StompHeaderAccessor acc) {
        String header = acc.getFirstNativeHeader("Authorization");
        if (header == null || !header.regionMatches(true, 0, "Bearer ", 0, 7)) {
            throw new MessageDeliveryException("UNAUTHORIZED: thiếu access token");
        }
        try {
            Jwt jwt = jwtDecoder.decode(header.substring(7).trim());
            return new UserPrincipal(UUID.fromString(jwt.getSubject()));
        } catch (JwtException | IllegalArgumentException e) {
            throw new MessageDeliveryException("UNAUTHORIZED: token không hợp lệ hoặc đã hết hạn");
        }
    }

    private void authorizeSubscribe(StompHeaderAccessor acc) {
        UUID me = requireUser(acc);
        String dest = acc.getDestination();
        if (dest == null) {
            throw new MessageDeliveryException("FORBIDDEN: thiếu destination");
        }
        if (dest.startsWith("/user/queue/")) {
            return;
        }
        if (dest.startsWith(RealtimeEvents.MATCH_TOPIC)) {
            try {
                UUID matchId = UUID.fromString(dest.substring(RealtimeEvents.MATCH_TOPIC.length()));
                if (matches.isParticipant(matchId, me)) {
                    return;
                }
            } catch (IllegalArgumentException ignored) {
                // không phải UUID: từ chối bên dưới
            }
        }
        throw new MessageDeliveryException("FORBIDDEN: không được đăng ký kênh này");
    }

    private static UUID requireUser(StompHeaderAccessor acc) {
        if (acc.getUser() == null) {
            throw new MessageDeliveryException("UNAUTHORIZED: chưa CONNECT với token");
        }
        return UserPrincipal.id(acc.getUser());
    }

    private void throttle(String sessionId) {
        if (sessionId == null) {
            return;
        }
        long second = clock.millis() / 1000;
        long[] slot = rate.computeIfAbsent(sessionId, k -> new long[] {second, 0});
        synchronized (slot) {
            if (slot[0] != second) {
                slot[0] = second;
                slot[1] = 0;
            }
            if (++slot[1] > MAX_FRAMES_PER_SECOND) {
                throw new MessageDeliveryException("RATE_LIMITED: gửi quá nhanh");
            }
        }
    }
}
