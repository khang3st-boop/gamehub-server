package com.gamehub.server.lobby;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.lobby.LobbyService.LobbyEntryDto;
import com.gamehub.server.lobby.LobbyService.LobbyPlayerDto;
import com.gamehub.server.lobby.LobbyService.LobbyRequest;

@RestController
@RequestMapping("/api/v1/lobby")
@Tag(name = "Sảnh thách đấu", description = "Danh sách người chơi đã bật \"Cho phép mời đấu\". Chỉ vùng thô tự chọn, không vị trí/khoảng cách")
@SecurityRequirement(name = "bearer")
public class LobbyController {

    private final LobbyService service;

    public LobbyController(LobbyService service) {
        this.service = service;
    }

    @PutMapping
    @Operation(summary = "Bật / cập nhật \"Cho phép người khác mời đấu\" (hết hạn sau 10 phút, gọi lại để gia hạn)")
    public LobbyEntryDto join(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody LobbyRequest body) {
        return service.join(CurrentUser.id(jwt), body);
    }

    @DeleteMapping
    @Operation(summary = "Tắt \"Cho phép mời đấu\" — rời khỏi danh sách ngay")
    public ResponseEntity<Void> leave(@AuthenticationPrincipal Jwt jwt) {
        service.leave(CurrentUser.id(jwt));
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me")
    @Operation(summary = "Trạng thái trong sảnh của tôi (204 nếu chưa bật)")
    public ResponseEntity<LobbyEntryDto> mine(@AuthenticationPrincipal Jwt jwt) {
        LobbyEntryDto e = service.mine(CurrentUser.id(jwt));
        return e == null ? ResponseEntity.noContent().build() : ResponseEntity.ok(e);
    }

    @GetMapping
    @Operation(summary = "Danh sách người chơi cho phép mời đấu (lọc game, vùng thô, số người, chỉ người rảnh)")
    public List<LobbyPlayerDto> list(@AuthenticationPrincipal Jwt jwt,
            @RequestParam(name = "game", required = false) String game,
            @RequestParam(name = "region", required = false) String region,
            @RequestParam(name = "capacity", required = false) Integer capacity,
            @RequestParam(name = "readyOnly", defaultValue = "false") boolean readyOnly) {
        return service.list(CurrentUser.id(jwt), game, region, capacity, readyOnly);
    }
}
