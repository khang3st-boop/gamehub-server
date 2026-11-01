package com.gamehub.server.challenge;

import java.util.List;
import java.util.UUID;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.challenge.ChallengeDtos.ChallengeDto;
import com.gamehub.server.challenge.ChallengeDtos.CreateChallengeRequest;
import com.gamehub.server.challenge.ChallengeDtos.SubmitChallengeRequest;
import com.gamehub.server.common.CurrentUser;

@RestController
@RequestMapping("/api/v1/challenges")
@Tag(name = "Thử thách Rubik", description = "Hai người giải cùng một chuỗi xáo trộn; server kiểm tra lời giải")
@SecurityRequirement(name = "bearer")
public class ChallengeController {

    private final ChallengeService service;

    public ChallengeController(ChallengeService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Tạo thử thách (chỉ định đối thủ hoặc công khai)")
    public ChallengeDto create(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody CreateChallengeRequest body) {
        return service.create(CurrentUser.id(jwt), body);
    }

    @GetMapping
    @Operation(summary = "Thử thách của tôi (50 mới nhất)")
    public List<ChallengeDto> mine(@AuthenticationPrincipal Jwt jwt) {
        return service.mine(CurrentUser.id(jwt));
    }

    @GetMapping("/open")
    @Operation(summary = "Thử thách công khai đang chờ người nhận")
    public List<ChallengeDto> open(@AuthenticationPrincipal Jwt jwt) {
        return service.open(CurrentUser.id(jwt));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Chi tiết thử thách")
    public ChallengeDto get(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.get(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/accept")
    @Operation(summary = "Nhận thử thách")
    public ChallengeDto accept(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.accept(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/decline")
    @Operation(summary = "Từ chối (người được mời) hoặc huỷ (người tạo) khi chưa được nhận")
    public ChallengeDto decline(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id) {
        return service.decline(CurrentUser.id(jwt), id);
    }

    @PostMapping("/{id}/submit")
    @Operation(summary = "Nộp lời giải (một lần; gửi lại cùng clientId được bỏ qua)")
    public ChallengeDto submit(@AuthenticationPrincipal Jwt jwt, @PathVariable("id") UUID id,
            @Valid @RequestBody SubmitChallengeRequest body) {
        return service.submit(CurrentUser.id(jwt), id, body);
    }
}
