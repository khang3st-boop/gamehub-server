package com.gamehub.server.common;

import java.time.Clock;
import java.time.Instant;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Hệ thống")
public class HealthController {

    private final Clock clock;

    public HealthController(Clock clock) {
        this.clock = clock;
    }

    public record Health(String status, Instant serverTime) {
    }

    @GetMapping("/api/v1/health")
    @Operation(summary = "Kiểm tra server còn hoạt động (không cần đăng nhập)")
    public Health health() {
        return new Health("UP", Instant.now(clock));
    }
}
