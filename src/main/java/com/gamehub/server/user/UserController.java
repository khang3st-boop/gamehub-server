package com.gamehub.server.user;

import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.user.UserDtos.UpdateProfileRequest;
import com.gamehub.server.user.UserDtos.UserDto;
import com.gamehub.server.user.UserDtos.UserSummaryDto;

@RestController
@RequestMapping("/api/v1/users")
@Tag(name = "Người dùng", description = "Hồ sơ, tìm kiếm, chặn người chơi")
@SecurityRequirement(name = "bearer")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/me")
    @Operation(summary = "Hồ sơ của tôi")
    public UserDto me(@AuthenticationPrincipal Jwt jwt) {
        return UserDto.of(service.me(CurrentUser.id(jwt)));
    }

    @PatchMapping("/me")
    @Operation(summary = "Cập nhật tên hiển thị / màu avatar")
    public UserDto update(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody UpdateProfileRequest req) {
        return UserDto.of(service.update(CurrentUser.id(jwt), req));
    }

    @GetMapping("/search")
    @Operation(summary = "Tìm người chơi theo tên đăng nhập / tên hiển thị (2–30 ký tự)")
    public List<UserSummaryDto> search(@AuthenticationPrincipal Jwt jwt, @RequestParam("q") String q) {
        return service.search(CurrentUser.id(jwt), q);
    }

    @PostMapping("/{id}/block")
    @Operation(summary = "Chặn người chơi (idempotent)")
    public ResponseEntity<Void> block(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        service.block(CurrentUser.id(jwt), id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}/block")
    @Operation(summary = "Bỏ chặn người chơi")
    public ResponseEntity<Void> unblock(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        service.unblock(CurrentUser.id(jwt), id);
        return ResponseEntity.noContent().build();
    }
}
