package com.gamehub.server.challenge;

import java.time.Instant;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public final class ChallengeDtos {

    private ChallengeDtos() {
    }

    @Schema(description = "Tạo thử thách. Không có opponentId = thử thách công khai cho bất kỳ ai nhận.")
    public record CreateChallengeRequest(
            UUID opponentId,
            @Schema(description = "Cho phép dùng gợi ý / tự giải (bài có trợ giúp vẫn thua bài tự giải)")
            boolean allowAssist,
            @Size(max = 140, message = "Lời nhắn tối đa 140 ký tự") String message) {
    }

    @Schema(description = "Nộp bài giải. Server phát lại lời giải trên chuỗi xáo trộn để kiểm tra.")
    public record SubmitChallengeRequest(
            @NotBlank @Size(max = 64) @Pattern(regexp = "^[A-Za-z0-9-]+$") String clientId,
            @Min(0) @Max(86_400_000) long durationMs,
            @Min(0) @Max(5000) int moves,
            @NotNull @Size(max = 8000) @Schema(example = "R U R' U'") String solution,
            boolean assisted) {
    }

    public record ChallengeEntryDto(
            UUID userId,
            String displayName,
            int avatarColor,
            Long durationMs,
            Integer moves,
            Boolean assisted,
            Instant submittedAt) {
    }

    public record ChallengeDto(
            UUID id,
            String scramble,
            @Schema(allowableValues = {"OPEN", "ACCEPTED", "COMPLETED", "DECLINED", "EXPIRED"}) String status,
            boolean allowAssist,
            ChallengeEntryDto creator,
            @Schema(description = "null khi thử thách công khai chưa có người nhận") ChallengeEntryDto opponent,
            @Schema(description = "null khi chưa xong hoặc hoà") UUID winnerId,
            Instant createdAt,
            Instant expiresAt,
            String message) {
    }
}
