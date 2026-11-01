package com.gamehub.server.chat;

import java.time.Instant;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public final class ChatDtos {

    private ChatDtos() {
    }

    public record ConversationDto(
            UUID userId,
            String displayName,
            int avatarColor,
            String lastMessage,
            Instant lastAt,
            int unread,
            @Schema(description = "Tôi đã chặn người này") boolean blocked) {
    }

    public record MessageDto(long id, UUID senderId, UUID recipientId, String text, Instant sentAt) {

        static MessageDto of(ChatMessage m) {
            return new MessageDto(m.getId(), m.getSenderId(), m.getRecipientId(), m.getText(), m.getSentAt());
        }
    }

    public record SendMessageRequest(
            @NotBlank(message = "Tin nhắn không được trống")
            @Size(max = 500, message = "Tin nhắn tối đa 500 ký tự") String text,
            @Schema(description = "UUID do client sinh để gửi lại không bị trùng")
            @NotBlank @Size(max = 64) @Pattern(regexp = "^[A-Za-z0-9-]+$") String clientId) {
    }

    public record ReportRequest(
            @NotNull UUID userId,
            @NotBlank(message = "Cần nêu lý do") @Size(max = 500, message = "Lý do tối đa 500 ký tự") String reason,
            Long messageId) {
    }

    public record ReportDto(long id, String status) {
    }
}
