package com.gamehub.server.invite;

import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.invite.InviteService.InviteDto;
import com.gamehub.server.invite.InviteService.InviteRequest;

@RestController
@RequestMapping("/api/v1/challenges/invites")
@Tag(name = "Lời mời đấu trực tiếp", description = "Mời một người bạn đang online đấu ngay; hết hạn sau 60 giây")
@SecurityRequirement(name = "bearer")
public class InviteController {

    private final InviteService service;

    public InviteController(InviteService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Lời mời đang chờ (gửi đi và nhận được)")
    public List<InviteDto> list(@AuthenticationPrincipal Jwt jwt) {
        return service.list(CurrentUser.id(jwt));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Mời bạn đấu (chỉ bạn bè, đang online, không ở trận khác)")
    public InviteDto send(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody InviteRequest body) {
        return service.send(CurrentUser.id(jwt), body);
    }

    @PostMapping("/{id}/accept")
    @Operation(summary = "Chấp nhận lời mời → server tạo phòng đấu (matchId trong kết quả)")
    public InviteDto accept(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.accept(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/decline")
    @Operation(summary = "Từ chối lời mời")
    public InviteDto decline(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.decline(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/cancel")
    @Operation(summary = "Người mời huỷ lời mời")
    public InviteDto cancel(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.cancel(CurrentUser.id(jwt), id);
    }
}
