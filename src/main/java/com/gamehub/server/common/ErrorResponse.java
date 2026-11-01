package com.gamehub.server.common;

import java.time.Instant;
import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;

/** Định dạng lỗi thống nhất của mọi endpoint. */
@Schema(description = "Lỗi trả về từ API")
public record ErrorResponse(
        @Schema(example = "VALIDATION") String code,
        @Schema(example = "Dữ liệu không hợp lệ") String message,
        List<FieldError> fieldErrors,
        Instant timestamp,
        @Schema(example = "/api/v1/auth/register") String path) {

    /** Lỗi của một trường dữ liệu đầu vào. */
    public record FieldError(
            @Schema(example = "username") String field,
            @Schema(example = "3–20 ký tự: chữ không dấu, số, \"_\" hoặc \".\"") String message) {
    }

    public static ErrorResponse of(String code, String message, String path) {
        return new ErrorResponse(code, message, List.of(), Instant.now(), path);
    }
}
