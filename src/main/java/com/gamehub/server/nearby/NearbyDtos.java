package com.gamehub.server.nearby;

import java.time.Instant;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

public final class NearbyDtos {

    private NearbyDtos() {
    }

    @Schema(description = "Vị trí hiện tại. Server làm tròn về ô 0,01° (~1,1 km) và KHÔNG lưu toạ độ gốc.")
    public record PresenceRequest(
            @NotNull @DecimalMin("-90") @DecimalMax("90") Double lat,
            @NotNull @DecimalMin("-180") @DecimalMax("180") Double lon) {
    }

    @Schema(description = "Vị trí tự hết hiệu lực sau thời điểm này nếu không được làm mới")
    public record PresenceDto(Instant expiresAt) {
    }

    public record NearbyPlayerDto(
            UUID userId,
            String displayName,
            int avatarColor,
            @Schema(description = "Khoảng cách theo nhóm, không bao giờ là số chính xác", example = "2–5 km")
            String distance,
            @Schema(description = "Làm tròn xuống 5 phút") Instant lastSeen) {
    }
}
