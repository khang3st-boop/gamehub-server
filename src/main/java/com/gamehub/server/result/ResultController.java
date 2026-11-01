package com.gamehub.server.result;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.result.ResultDtos.LeaderboardEntry;
import com.gamehub.server.result.ResultDtos.ResultDto;
import com.gamehub.server.result.ResultDtos.ResultPayload;
import com.gamehub.server.result.ResultDtos.SyncRequest;
import com.gamehub.server.result.ResultDtos.SyncResponse;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Kết quả & xếp hạng", description = "Gửi kết quả (server kiểm tra và tính điểm), đồng bộ, bảng xếp hạng")
public class ResultController {

    private final ResultService service;

    public ResultController(ResultService service) {
        this.service = service;
    }

    @PostMapping("/results")
    @SecurityRequirement(name = "bearer")
    @Operation(summary = "Gửi một kết quả (idempotent theo clientId). 422 RESULT_REJECTED nếu dữ liệu không khả tín")
    public ResultDto submit(@AuthenticationPrincipal Jwt jwt, @RequestBody ResultPayload body) {
        return service.submitOne(CurrentUser.id(jwt), body);
    }

    @GetMapping("/results/me")
    @SecurityRequirement(name = "bearer")
    @Operation(summary = "Lịch sử ván của tôi trên server (mới nhất trước)")
    public List<ResultDto> mine(@AuthenticationPrincipal Jwt jwt,
            @RequestParam(name = "game", required = false) String game,
            @RequestParam(name = "limit", defaultValue = "50") int limit) {
        return service.history(CurrentUser.id(jwt), game, limit);
    }

    @PostMapping("/sync")
    @SecurityRequirement(name = "bearer")
    @Operation(summary = "Đồng bộ hai chiều: gửi kết quả chưa đồng bộ, nhận kết quả mới từ thiết bị khác")
    public SyncResponse sync(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody SyncRequest body) {
        return service.sync(CurrentUser.id(jwt), body);
    }

    @GetMapping("/leaderboard")
    @Operation(summary = "Bảng xếp hạng công khai (chỉ ván không dùng trợ giúp)")
    public List<LeaderboardEntry> leaderboard(@RequestParam("game") String game,
            @RequestParam(name = "period", defaultValue = "all") String period,
            @RequestParam(name = "limit", defaultValue = "50") int limit) {
        return service.leaderboard(game, period, limit);
    }
}
