package com.gamehub.server.user;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.chat.ChatDtos.ReportDto;
import com.gamehub.server.chat.Report;
import com.gamehub.server.chat.ReportRepository;
import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.common.Text;

/** Báo cáo một người chơi (từ thẻ trong sảnh thách đấu / lời mời), không cần kèm tin nhắn. */
@RestController
@RequestMapping("/api/v1/users")
@Tag(name = "Người dùng", description = "Hồ sơ, tìm kiếm, chặn người chơi")
@SecurityRequirement(name = "bearer")
public class UserReportController {

    public record UserReportRequest(
            @NotBlank(message = "Cần nêu lý do") @Size(max = 500) String reason) {
    }

    private final UserService users;
    private final ReportRepository reports;
    private final RateLimiter limiter;
    private final Clock clock;

    public UserReportController(UserService users, ReportRepository reports, RateLimiter limiter, Clock clock) {
        this.users = users;
        this.reports = reports;
        this.limiter = limiter;
        this.clock = clock;
    }

    @PostMapping("/{id}/report")
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    @Operation(summary = "Báo cáo người chơi (spam lời mời, tên phản cảm, gian lận…); tối đa 20 lần / giờ")
    public ReportDto report(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody UserReportRequest body) {
        UUID me = CurrentUser.id(jwt);
        if (me.equals(id)) {
            throw ApiException.badRequest("INVALID_TARGET", "Không thể tự báo cáo chính mình");
        }
        users.require(id);
        String reason = Text.clean(body.reason());
        if (reason == null) {
            throw ApiException.badRequest("VALIDATION", "Cần nêu lý do");
        }
        limiter.hit("report:" + me, 20, Duration.ofHours(1));
        Report r = reports.save(new Report(me, id, null, reason, Instant.now(clock)));
        return new ReportDto(r.getId(), "NEW");
    }
}
