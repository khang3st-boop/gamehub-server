package com.gamehub.server.daily;

import java.time.Clock;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.result.ResultDtos.DailyEntry;
import com.gamehub.server.result.ResultDtos.LeaderboardEntry;
import com.gamehub.server.result.ResultService;

@RestController
@RequestMapping("/api/v1/daily")
@Tag(name = "Thử thách hằng ngày", description = "Đề chung mỗi ngày (UTC+7), bảng xếp hạng theo ngày")
public class DailyController {

    private final ResultService results;
    private final Clock clock;

    public DailyController(ResultService results, Clock clock) {
        this.results = results;
        this.clock = clock;
    }

    @Schema(description = "Đề hôm nay. serverTime giúp client hiệu chỉnh lệch đồng hồ.")
    public record Today(Instant serverTime, String date, Instant resetsAt, String rulesVersion,
            DailyChallenges.Challenge challenge) {
    }

    @GetMapping("/today")
    @Operation(summary = "Đề thử thách hôm nay (công khai)")
    public Today today() {
        Instant now = Instant.now(clock);
        LocalDate day = DailyRandom.dayOf(now);
        return new Today(now, day.toString(), DailyRandom.endOf(day), DailyRandom.RULES_VERSION,
                DailyChallenges.forDate(day));
    }

    @GetMapping("/{date}/leaderboard")
    @Operation(summary = "Bảng xếp hạng một ngày thử thách (công khai, chỉ kết quả đã xác thực)")
    public List<LeaderboardEntry> leaderboard(@PathVariable("date") String date,
            @RequestParam("game") String game,
            @RequestParam(name = "limit", defaultValue = "50") int limit) {
        LocalDate day = DailyRandom.parse(date);
        if (day == null) {
            throw ApiException.badRequest("VALIDATION", "Ngày phải có dạng yyyy-MM-dd");
        }
        return results.dailyLeaderboard(day, game, limit);
    }

    @GetMapping("/me")
    @SecurityRequirement(name = "bearer")
    @Operation(summary = "Kết quả hằng ngày đã được xác thực của tôi")
    public List<DailyEntry> mine(@AuthenticationPrincipal Jwt jwt,
            @RequestParam(name = "days", defaultValue = "60") int days) {
        return results.dailyMine(CurrentUser.id(jwt), days);
    }
}
