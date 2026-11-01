package com.gamehub.server.match;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import com.gamehub.server.user.UserDtos.UserSummaryDto;

import io.swagger.v3.oas.annotations.media.Schema;

public final class MatchDtos {

    private MatchDtos() {
    }

    public record PlayerDto(
            UserSummaryDto user,
            @Schema(description = "A hoặc B") String slot,
            boolean ready,
            @Schema(description = "Tiến độ 0–100 do client báo (chỉ để hiển thị, không quyết định thắng thua)")
            int progress,
            @Schema(description = "Đã dùng gợi ý / tự giải: trận không tính xếp hạng") boolean assisted,
            @Schema(description = "Thời gian hoàn thành do SERVER đo (ms), null nếu chưa xong") Long timeMs,
            @Schema(description = "Đang có kết nối realtime") boolean connected) {
    }

    public record MatchDto(
            UUID id,
            String game,
            String mode,
            @Schema(description = "INVITE (mời bạn) | MATCHMAKING (ghép trận)") String source,
            Match.Status status,
            @Schema(description = "Đề do server sinh — giống hệt cho hai người") Map<String, Object> config,
            List<PlayerDto> players,
            Instant createdAt,
            @Schema(description = "Hạn bấm Sẵn sàng") Instant readyDeadline,
            @Schema(description = "Thời điểm bắt đầu tính giờ (hết đếm ngược)") Instant startAt,
            Instant finishedAt,
            UUID winnerId,
            Match.EndReason endReason,
            @Schema(description = "Trận có tính điểm xếp hạng online không") boolean rated,
            @Schema(description = "Caro: các ô đã đánh theo thứ tự (X đi trước)") List<Integer> caroMoves,
            @Schema(description = "Caro: hạn của lượt hiện tại") Instant turnDeadline,
            @Schema(description = "Giờ server lúc tạo bản chụp (để client bù lệch đồng hồ)") Instant serverTime) {
    }

    public record ProgressRequest(@Min(0) @Max(100) int progress) {
    }

    public record PuzzleDrop(
            @Schema(description = "Mảnh (id = hàng·số cột + cột)") @Min(0) @Max(63) int piece,
            @Schema(description = "Thời điểm đặt đúng, ms kể từ startAt") @Min(0) long atMs,
            @Schema(description = "Mảnh do gợi ý đặt") boolean hint) {
    }

    public record FinishRequest(
            @Schema(description = "Rubik: toàn bộ nước đã xoay sau khi xáo, ký hiệu WCA") @Size(max = 8000) String solution,
            @Schema(description = "Sudoku: lưới 81 chữ số đã điền") @Pattern(regexp = "^[0-9]{81}$") String grid,
            @Schema(description = "Xếp hình: nhật ký đặt mảnh đúng") @Valid @Size(max = 64) List<PuzzleDrop> drops,
            @Schema(description = "Xếp hình: số lần thả sai") @Min(0) Integer wrongDrops,
            @Schema(description = "Có dùng gợi ý / tự giải trong trận") Boolean assisted) {

        public boolean usedAssist() {
            return Boolean.TRUE.equals(assisted);
        }
    }

    public record CaroMoveRequest(
            @Min(0) @Max(224) int cell,
            @Schema(description = "Số nước đã có trên bàn khi đánh (chống gửi trùng / lệch lượt)") @Min(0) int index) {
    }

    public record ChatRequest(
            @NotBlank(message = "Tin nhắn không được trống")
            @Size(max = 300, message = "Tin nhắn trong trận tối đa 300 ký tự") String text,
            @NotBlank @Size(max = 64) @Pattern(regexp = "^[A-Za-z0-9-]+$") String clientId) {
    }

    public record MatchMessageDto(long id, UUID matchId, UUID senderId, String text, String clientId, Instant sentAt) {

        static MatchMessageDto of(MatchMessage m) {
            return new MatchMessageDto(m.getId(), m.getMatchId(), m.getSenderId(), m.getText(), m.getClientId(),
                    m.getSentAt());
        }
    }

    public record MatchReportRequest(
            Long messageId,
            @NotBlank(message = "Cần nêu lý do") @Size(max = 500) String reason) {
    }

    public record ProgressEvent(UUID userId, int progress) {
    }

    public record CaroMoveEvent(int index, int cell, UUID by, Instant turnDeadline) {
    }

    public record ConnectionEvent(UUID userId, boolean connected) {
    }

    public record AssistEvent(UUID userId) {
    }

    /** Payload STOMP {@code /app/match.<action>}: luôn có matchId. */
    public record StompMatchAction(@NotNull UUID matchId) {
    }
}
