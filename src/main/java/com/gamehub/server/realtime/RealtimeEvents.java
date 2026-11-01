package com.gamehub.server.realtime;

import java.time.Clock;
import java.time.Instant;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;

/**
 * Gửi sự kiện realtime. Hàng đợi riêng của người dùng: {@code /user/queue/events}; kênh phòng
 * đấu: {@code /topic/match.<id>} (chỉ hai người chơi được đăng ký — xem {@link StompAuthInterceptor}).
 * Nếu đang trong giao dịch CSDL thì chỉ gửi SAU khi commit, để client không nhận trạng thái chưa lưu.
 */
@Component
public class RealtimeEvents {

    public static final String USER_QUEUE = "/queue/events";
    public static final String MATCH_TOPIC = "/topic/match.";

    private static final Logger log = LoggerFactory.getLogger(RealtimeEvents.class);

    private final SimpMessagingTemplate template;
    private final Clock clock;

    public RealtimeEvents(SimpMessagingTemplate template, Clock clock) {
        this.template = template;
        this.clock = clock;
    }

    public void toUser(UUID userId, String type, Object data) {
        RealtimeEvent e = new RealtimeEvent(type, data, Instant.now(clock));
        afterCommit(() -> template.convertAndSendToUser(userId.toString(), USER_QUEUE, e));
    }

    public void toMatch(UUID matchId, String type, Object data) {
        RealtimeEvent e = new RealtimeEvent(type, data, Instant.now(clock));
        afterCommit(() -> template.convertAndSend(MATCH_TOPIC + matchId, e));
    }

    private static void afterCommit(Runnable send) {
        Runnable safe = () -> {
            try {
                send.run();
            } catch (RuntimeException ex) {
                log.warn("Không gửi được sự kiện realtime: {}", ex.toString());
            }
        };
        if (TransactionSynchronizationManager.isSynchronizationActive()) {
            TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
                @Override
                public void afterCommit() {
                    safe.run();
                }
            });
        } else {
            safe.run();
        }
    }
}
