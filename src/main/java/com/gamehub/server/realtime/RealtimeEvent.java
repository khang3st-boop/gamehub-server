package com.gamehub.server.realtime;

import java.time.Instant;

/**
 * Phong bì của mọi sự kiện server → client.
 *
 * @param type tên sự kiện, vd. {@code match.state}, {@code chat.message} (xem docs/websocket-events.md)
 * @param data nội dung
 * @param ts   giờ server khi gửi (client dùng để ước lượng lệch đồng hồ)
 */
public record RealtimeEvent(String type, Object data, Instant ts) {
}
