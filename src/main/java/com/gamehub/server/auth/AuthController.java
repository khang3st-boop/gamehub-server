package com.gamehub.server.auth;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.auth.AuthDtos.AuthResponse;
import com.gamehub.server.auth.AuthDtos.LoginRequest;
import com.gamehub.server.auth.AuthDtos.RefreshRequest;
import com.gamehub.server.auth.AuthDtos.RegisterRequest;

@RestController
@RequestMapping("/api/v1/auth")
@Tag(name = "Xác thực", description = "Đăng ký, đăng nhập, làm mới và thu hồi token")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/register")
    @Operation(summary = "Đăng ký tài khoản mới (mật khẩu được băm bằng BCrypt)")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest req, HttpServletRequest http) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.register(req, http.getRemoteAddr()));
    }

    @PostMapping("/login")
    @Operation(summary = "Đăng nhập; khoá tạm sau 10 lần sai trong 15 phút")
    public AuthResponse login(@Valid @RequestBody LoginRequest req) {
        return service.login(req);
    }

    @PostMapping("/refresh")
    @Operation(summary = "Đổi refresh token lấy cặp token mới (refresh token cũ bị thu hồi)")
    public AuthResponse refresh(@Valid @RequestBody RefreshRequest req) {
        return service.refresh(req.refreshToken());
    }

    @PostMapping("/logout")
    @Operation(summary = "Đăng xuất: thu hồi refresh token và mọi token cùng phiên")
    public ResponseEntity<Void> logout(@Valid @RequestBody RefreshRequest req) {
        service.logout(req.refreshToken());
        return ResponseEntity.noContent().build();
    }
}
