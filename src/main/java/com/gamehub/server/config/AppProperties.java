package com.gamehub.server.config;

import java.time.Duration;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.DefaultValue;

/**
 * Cấu hình riêng của ứng dụng (tiền tố {@code gamehub.*} trong application.yml).
 *
 * @param jwt       khoá ký và thời hạn token
 * @param challenge thời hạn thử thách
 * @param nearby    thời hạn chia sẻ vị trí, bán kính tối đa
 * @param online    thời hạn trong phòng đấu realtime, lời mời, hàng chờ ghép trận
 * @param cors      origin web được phép gọi API / mở WebSocket
 */
@ConfigurationProperties(prefix = "gamehub")
public record AppProperties(
        @DefaultValue Jwt jwt,
        @DefaultValue Challenge challenge,
        @DefaultValue Nearby nearby,
        @DefaultValue Online online,
        @DefaultValue Cors cors) {

    /**
     * @param secret     khoá HMAC (≥ 32 byte). Để trống: chỉ cho phép ngoài profile {@code prod},
     *                   khi đó sinh khoá ngẫu nhiên mỗi lần khởi động.
     * @param issuer     giá trị claim {@code iss}
     * @param accessTtl  thời hạn access token
     * @param refreshTtl thời hạn refresh token
     */
    public record Jwt(
            @DefaultValue("") String secret,
            @DefaultValue("gamehub") String issuer,
            @DefaultValue("15m") Duration accessTtl,
            @DefaultValue("30d") Duration refreshTtl) {
    }

    /** @param ttl thời gian từ lúc tạo đến khi thử thách hết hạn */
    public record Challenge(@DefaultValue("72h") Duration ttl) {
    }

    /**
     * @param presenceTtl  sau thời gian này vị trí đã chia sẻ tự hết hiệu lực
     * @param maxRadiusKm  bán kính tìm kiếm tối đa
     */
    public record Nearby(
            @DefaultValue("30m") Duration presenceTtl,
            @DefaultValue("50") int maxRadiusKm) {
    }

    /**
     * @param readyTimeout     hai người phải bấm "Sẵn sàng" trong thời gian này, nếu không phòng bị huỷ
     * @param countdown        đếm ngược trước khi bắt đầu tính giờ
     * @param caroTurn         thời gian tối đa cho mỗi nước Caro (hết giờ = thua)
     * @param maxRace          thời gian tối đa của trận đua giải (Rubik/Sudoku/Xếp hình)
     * @param disconnectGrace  mất kết nối quá thời gian này trong trận = xử thua
     * @param inviteTtl        lời mời đấu tự hết hạn
     * @param queueTtl         vé ghép trận tự hết hạn (người chơi phải bấm tìm lại)
     * @param readyStatusTtl   trạng thái "Sẵn sàng" tự trở về "Online"
     */
    public record Online(
            @DefaultValue("60s") Duration readyTimeout,
            @DefaultValue("3s") Duration countdown,
            @DefaultValue("30s") Duration caroTurn,
            @DefaultValue("30m") Duration maxRace,
            @DefaultValue("45s") Duration disconnectGrace,
            @DefaultValue("60s") Duration inviteTtl,
            @DefaultValue("3m") Duration queueTtl,
            @DefaultValue("10m") Duration readyStatusTtl) {
    }

    /**
     * @param allowedOrigins mẫu origin (vd. {@code https://game.example.vn}). App Android không gửi
     *                       Origin nên không bị ảnh hưởng. Production KHÔNG dùng {@code *}.
     */
    public record Cors(@DefaultValue("http://localhost:*,http://127.0.0.1:*") List<String> allowedOrigins) {
    }
}
