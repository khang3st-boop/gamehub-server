package com.gamehub.server.matchmaking;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.matchmaking.MatchmakingService.QueueRequest;
import com.gamehub.server.matchmaking.MatchmakingService.TicketDto;
import com.gamehub.server.matchmaking.Regions.Region;

@RestController
@RequestMapping("/api/v1/matchmaking")
@Tag(name = "Ghép trận", description = "Hàng chờ ghép trận theo game, vùng thô (không dùng toạ độ), điểm và thời gian chờ")
@SecurityRequirement(name = "bearer")
public class MatchmakingController {

    private final MatchmakingService service;

    public MatchmakingController(MatchmakingService service) {
        this.service = service;
    }

    @GetMapping("/regions")
    @Operation(summary = "Danh sách vùng thô. Thiết bị tự chọn vùng; tâm vùng chỉ dùng để làm tròn vị trí NGAY TRÊN MÁY")
    public List<Region> regions() {
        return Regions.ALL;
    }

    @PostMapping("/queue")
    @Operation(summary = "Vào hàng chờ (chỉ gửi mã vùng). widen=true cho phép ghép vùng kề / mọi vùng khi chờ lâu")
    public TicketDto join(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody QueueRequest body) {
        return service.join(CurrentUser.id(jwt), body);
    }

    @GetMapping("/queue")
    @Operation(summary = "Vé chờ hiện tại (204 nếu không ở hàng chờ)")
    public ResponseEntity<TicketDto> ticket(@AuthenticationPrincipal Jwt jwt) {
        TicketDto t = service.ticket(CurrentUser.id(jwt));
        return t == null ? ResponseEntity.noContent().build() : ResponseEntity.ok(t);
    }

    @DeleteMapping("/queue")
    @Operation(summary = "Rời hàng chờ")
    public ResponseEntity<Void> leave(@AuthenticationPrincipal Jwt jwt) {
        service.leave(CurrentUser.id(jwt));
        return ResponseEntity.noContent().build();
    }
}
