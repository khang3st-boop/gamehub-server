package com.gamehub.server.auth;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import com.gamehub.server.user.UserDtos.UserDto;

public final class AuthDtos {

    private AuthDtos() {
    }

    public record RegisterRequest(
            @Schema(example = "minh_99")
            @NotBlank(message = "Vui lòng nhập tên đăng nhập")
            @Pattern(regexp = "^[a-zA-Z0-9_.]{3,20}$",
                    message = "Tên đăng nhập 3–20 ký tự, chỉ gồm chữ không dấu, số, _ và .")
            String username,

            @Schema(example = "Minh Nguyễn")
            @NotBlank(message = "Vui lòng nhập tên hiển thị")
            @Size(min = 2, max = 30, message = "Tên hiển thị 2–30 ký tự")
            @Pattern(regexp = "^[^<>\\p{Cntrl}]*$", message = "Tên hiển thị chứa ký tự không hợp lệ")
            String displayName,

            @Schema(example = "matkhau123")
            @NotBlank(message = "Vui lòng nhập mật khẩu")
            @Size(min = 8, max = 72, message = "Mật khẩu 8–72 ký tự")
            @Pattern(regexp = "^(?=.*\\p{L})(?=.*\\d).*$", message = "Mật khẩu cần có cả chữ và số")
            String password) {
    }

    public record LoginRequest(
            @Schema(example = "minh_99") @NotBlank(message = "Vui lòng nhập tên đăng nhập") @Size(max = 64) String username,
            @Schema(example = "matkhau123") @NotBlank(message = "Vui lòng nhập mật khẩu") @Size(max = 200) String password) {
    }

    public record RefreshRequest(@NotBlank @Size(max = 200) String refreshToken) {
    }

    @Schema(description = "Cặp token. accessToken gửi trong header Authorization: Bearer …")
    public record AuthResponse(
            String accessToken,
            String refreshToken,
            @Schema(description = "Số giây đến khi access token hết hạn") long expiresIn,
            String tokenType,
            UserDto user) {
    }
}
