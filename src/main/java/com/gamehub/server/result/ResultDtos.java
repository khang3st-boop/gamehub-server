package com.gamehub.server.result;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public final class ResultDtos {

    private ResultDtos() {
    }

    @Schema(description = "Kết quả một ván do client gửi. Trường score chỉ để tham khảo: server tự tính lại.")
    public record ResultPayload(
            @Schema(description = "UUID do client sinh — khoá chống gửi trùng")
            @NotBlank @Size(max = 64) @Pattern(regexp = "^[A-Za-z0-9-]+$") String clientId,
            @Schema(allowableValues = {"rubik", "sudoku", "puzzle", "caro"}) @NotBlank @Size(max = 16) String game,
            @Schema(example = "scramble") @NotBlank @Size(max = 32) String mode,
            @Schema(allowableValues = {"win", "loss", "draw"}) @NotBlank @Size(max = 8) String outcome,
            @Schema(description = "Điểm client tự tính (bị bỏ qua)") int score,
            @Min(0) long durationMs,
            @Min(0) int moves,
            @Min(0) int errors,
            @Min(0) int hints,
            boolean assisted,
            @NotNull Instant playedAt,
            @Schema(description = "Dữ liệu ván để server kiểm tra (scramble/solution, puzzle/solution, moves...)")
            Map<String, Object> details) {
    }

    public record ResultDto(
            String clientId,
            UUID userId,
            String game,
            String mode,
            String outcome,
            @Schema(description = "Điểm do server tính") int score,
            long durationMs,
            int moves,
            int errors,
            int hints,
            boolean assisted,
            boolean rankable,
            Instant playedAt,
            Instant receivedAt,
            Map<String, Object> details,
            @Schema(description = "Ngày thử thách hằng ngày mà kết quả được xếp hạng (null nếu không)")
            String dailyDate) {
    }

    public record SyncRequest(
            @NotNull @Size(max = 100, message = "Tối đa 100 kết quả mỗi lần đồng bộ") List<ResultPayload> results,
            @Schema(description = "serverTime của lần đồng bộ trước (ISO-8601) hoặc null") String since) {
    }

    public record Rejection(String clientId, String reason) {
    }

    public record SyncResponse(
            List<String> accepted,
            List<String> duplicates,
            List<Rejection> rejected,
            @Schema(description = "Kết quả của bạn được ghi nhận trên server kể từ 'since' (ví dụ từ thiết bị khác)")
            List<ResultDto> results,
            @Schema(description = "Dùng làm 'since' cho lần đồng bộ sau") Instant serverTime) {
    }

    @Schema(description = "Kết quả hằng ngày đã được server xác thực và xếp hạng")
    public record DailyEntry(String clientId, String date, String game, int score) {
    }

    public record LeaderboardEntry(
            int rank,
            UUID userId,
            String displayName,
            int avatarColor,
            int bestScore,
            Long bestTimeMs,
            long gamesPlayed) {
    }
}
