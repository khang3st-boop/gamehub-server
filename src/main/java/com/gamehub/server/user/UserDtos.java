package com.gamehub.server.user;

import java.time.Instant;
import java.util.UUID;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/** DTO hồ sơ người dùng. */
public final class UserDtos {

    private UserDtos() {
    }

    @Schema(description = "Hồ sơ đầy đủ của chính mình")
    public record UserDto(
            @Schema(example = "3f2b6a1e-8c1d-4b7a-9a51-0e2f4c6d8b10") UUID id,
            @Schema(example = "an_nguyen") String username,
            @Schema(example = "An Nguyễn") String displayName,
            @Schema(example = "2", description = "Chỉ số màu avatar 0..7") int avatarColor,
            Instant createdAt) {

        public static UserDto of(User u) {
            return new UserDto(u.getId(), u.getUsername(), u.getDisplayName(), u.getAvatarColor(), u.getCreatedAt());
        }
    }

    @Schema(description = "Thông tin công khai của người chơi khác")
    public record UserSummaryDto(UUID id, String username, String displayName, int avatarColor) {

        public static UserSummaryDto of(User u) {
            return new UserSummaryDto(u.getId(), u.getUsername(), u.getDisplayName(), u.getAvatarColor());
        }
    }

    @Schema(description = "Cập nhật hồ sơ; trường null giữ nguyên")
    public record UpdateProfileRequest(
            @Size(min = 2, max = 30, message = "Tên hiển thị 2–30 ký tự")
            @Pattern(regexp = "^[^<>\\p{Cntrl}]*$", message = "Tên hiển thị chứa ký tự không hợp lệ")
            @Schema(example = "An Nguyễn") String displayName,
            @Min(value = 0, message = "Màu avatar 0..7") @Max(value = 7, message = "Màu avatar 0..7")
            @Schema(example = "4") Integer avatarColor) {
    }
}
