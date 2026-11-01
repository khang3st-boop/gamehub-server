package com.gamehub.server.presence;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.presence.PresenceService.PresenceDto;

@RestController
@RequestMapping("/api/v1/presence")
@Tag(name = "Trạng thái online", description = "Online/offline tự động theo kết nối WebSocket; "
        + "'Sẵn sàng thách đấu' do người dùng bật và tự hết hạn")
@SecurityRequirement(name = "bearer")
public class PresenceController {

    public record ReadyRequest(@Schema(description = "true = sẵn sàng nhận lời mời đấu") boolean ready) {
    }

    private final PresenceService presence;

    public PresenceController(PresenceService presence) {
        this.presence = presence;
    }

    @GetMapping("/me")
    @Operation(summary = "Trạng thái hiện tại của tôi")
    public PresenceDto me(@AuthenticationPrincipal Jwt jwt) {
        var id = CurrentUser.id(jwt);
        return new PresenceDto(id, presence.status(id));
    }

    @PutMapping("/me")
    @Operation(summary = "Bật/tắt 'Sẵn sàng thách đấu' (tự tắt sau 10 phút)")
    public PresenceDto setReady(@AuthenticationPrincipal Jwt jwt, @RequestBody ReadyRequest req) {
        return presence.setReady(CurrentUser.id(jwt), req.ready());
    }
}
