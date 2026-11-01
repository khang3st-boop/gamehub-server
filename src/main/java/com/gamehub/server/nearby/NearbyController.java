package com.gamehub.server.nearby;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.nearby.NearbyDtos.NearbyPlayerDto;
import com.gamehub.server.nearby.NearbyDtos.PresenceDto;
import com.gamehub.server.nearby.NearbyDtos.PresenceRequest;

@RestController
@RequestMapping("/api/v1/nearby")
@Tag(name = "Người chơi gần đây", description = "Tự nguyện, vị trí gần đúng, tự hết hạn; không lộ toạ độ người khác")
@SecurityRequirement(name = "bearer")
public class NearbyController {

    private final NearbyService service;

    public NearbyController(NearbyService service) {
        this.service = service;
    }

    @PutMapping("/presence")
    @Operation(summary = "Bật/làm mới chia sẻ vị trí gần đúng")
    public PresenceDto update(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody PresenceRequest body) {
        return service.update(CurrentUser.id(jwt), body);
    }

    @DeleteMapping("/presence")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Operation(summary = "Tắt chia sẻ: xoá vị trí ngay lập tức")
    public void clear(@AuthenticationPrincipal Jwt jwt) {
        service.clear(CurrentUser.id(jwt));
    }

    @GetMapping("/players")
    @Operation(summary = "Người chơi đang chia sẻ trong bán kính (1–50 km). 409 nếu bạn chưa bật chia sẻ")
    public List<NearbyPlayerDto> players(@AuthenticationPrincipal Jwt jwt,
            @RequestParam(name = "radiusKm", defaultValue = "10") int radiusKm) {
        return service.players(CurrentUser.id(jwt), radiusKm);
    }
}
