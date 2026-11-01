package com.gamehub.server.common;

import java.time.Clock;
import java.time.Duration;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Giới hạn tần suất dạng cửa sổ trượt, lưu trong bộ nhớ (một instance server).
 * Dùng cho đăng nhập sai, đăng ký, gửi tin nhắn, báo cáo.
 */
@Component
public class RateLimiter {

    /** Cửa sổ dài nhất đang dùng; purge chỉ xoá lượt cũ hơn mốc này. */
    static final Duration MAX_WINDOW = Duration.ofHours(24);

    private final Map<String, Deque<Long>> hits = new ConcurrentHashMap<>();
    private final Clock clock;

    public RateLimiter(Clock clock) {
        this.clock = clock;
    }

    /** Ghi nhận một lần và ném 429 nếu vượt quá {@code limit} lần trong {@code window}. */
    public void hit(String key, int limit, Duration window) {
        check(key, limit, window);
        record(key);
    }

    /** Ném 429 nếu đã đạt giới hạn (không ghi nhận). */
    public void check(String key, int limit, Duration window) {
        if (count(key, window) >= limit) {
            throw new ApiException(HttpStatus.TOO_MANY_REQUESTS, "RATE_LIMITED",
                    "Thao tác quá nhiều lần, vui lòng thử lại sau " + window.toMinutes() + " phút");
        }
    }

    public void record(String key) {
        Deque<Long> q = hits.computeIfAbsent(key, k -> new ArrayDeque<>());
        synchronized (q) {
            q.addLast(clock.millis());
        }
    }

    public void reset(String key) {
        hits.remove(key);
    }

    /** Xoá các khoá không còn lượt nào trong 24 giờ để bộ nhớ không tăng mãi. */
    @Scheduled(fixedDelayString = "PT10M", initialDelayString = "PT10M")
    public void purge() {
        long from = clock.millis() - MAX_WINDOW.toMillis();
        hits.entrySet().removeIf(e -> {
            Deque<Long> q = e.getValue();
            synchronized (q) {
                while (!q.isEmpty() && q.peekFirst() < from) {
                    q.pollFirst();
                }
                return q.isEmpty();
            }
        });
    }

    int size() {
        return hits.size();
    }

    private int count(String key, Duration window) {
        Deque<Long> q = hits.get(key);
        if (q == null) {
            return 0;
        }
        long from = clock.millis() - window.toMillis();
        synchronized (q) {
            while (!q.isEmpty() && q.peekFirst() < from) {
                q.pollFirst();
            }
            return q.size();
        }
    }
}
