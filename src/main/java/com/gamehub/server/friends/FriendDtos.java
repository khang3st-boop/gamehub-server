package com.gamehub.server.friends;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;

import com.gamehub.server.presence.PresenceService.Status;
import com.gamehub.server.user.UserDtos.UserSummaryDto;

import io.swagger.v3.oas.annotations.media.Schema;

public final class FriendDtos {

    private FriendDtos() {
    }

    public record FriendDto(
            UserSummaryDto user,
            @Schema(description = "ONLINE | READY (sẵn sàng thách đấu) | IN_MATCH | OFFLINE") Status status,
            Instant since) {
    }

    public record FriendRequestDto(UserSummaryDto user, Instant createdAt) {
    }

    public record FriendRequestsDto(
            @Schema(description = "Lời mời kết bạn người khác gửi cho tôi") List<FriendRequestDto> incoming,
            @Schema(description = "Lời mời tôi đã gửi, chờ trả lời") List<FriendRequestDto> outgoing) {
    }

    public record SendFriendRequest(@NotNull UUID userId) {
    }

    public record FriendRequestResult(
            @Schema(description = "PENDING: đã gửi; ACCEPTED: hai bên đã là bạn (người kia cũng đã mời mình)")
            String status) {
    }
}
