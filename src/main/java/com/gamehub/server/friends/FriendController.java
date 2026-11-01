package com.gamehub.server.friends;

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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.common.CurrentUser;
import com.gamehub.server.friends.FriendDtos.FriendDto;
import com.gamehub.server.friends.FriendDtos.FriendRequestResult;
import com.gamehub.server.friends.FriendDtos.FriendRequestsDto;
import com.gamehub.server.friends.FriendDtos.SendFriendRequest;

@RestController
@RequestMapping("/api/v1/friends")
@Tag(name = "Bạn bè", description = "Kết bạn hai chiều. Chỉ bạn bè mới thấy trạng thái online, mời đấu và nhắn tin riêng")
@SecurityRequirement(name = "bearer")
public class FriendController {

    private final FriendService service;

    public FriendController(FriendService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Danh sách bạn bè kèm trạng thái (ONLINE, READY, IN_MATCH, OFFLINE)")
    public List<FriendDto> list(@AuthenticationPrincipal Jwt jwt) {
        return service.friends(CurrentUser.id(jwt));
    }

    @GetMapping("/requests")
    @Operation(summary = "Lời mời kết bạn đến và đi")
    public FriendRequestsDto requests(@AuthenticationPrincipal Jwt jwt) {
        return service.requests(CurrentUser.id(jwt));
    }

    @PostMapping("/requests")
    @Operation(summary = "Gửi lời mời kết bạn. Nếu người kia đã mời mình thì thành bạn ngay. 403 BLOCKED nếu có chặn")
    public FriendRequestResult send(@AuthenticationPrincipal Jwt jwt, @Valid @RequestBody SendFriendRequest req) {
        return service.request(CurrentUser.id(jwt), req.userId());
    }

    @PostMapping("/requests/{userId}/accept")
    @Operation(summary = "Chấp nhận lời mời kết bạn của userId")
    public FriendRequestResult accept(@AuthenticationPrincipal Jwt jwt, @PathVariable("userId") UUID userId) {
        return service.accept(CurrentUser.id(jwt), userId);
    }

    @PostMapping("/requests/{userId}/decline")
    @Operation(summary = "Từ chối lời mời kết bạn của userId")
    public ResponseEntity<Void> decline(@AuthenticationPrincipal Jwt jwt, @PathVariable("userId") UUID userId) {
        service.remove(CurrentUser.id(jwt), userId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Huỷ kết bạn hoặc huỷ lời mời đã gửi")
    public ResponseEntity<Void> remove(@AuthenticationPrincipal Jwt jwt, @PathVariable("userId") UUID userId) {
        service.remove(CurrentUser.id(jwt), userId);
        return ResponseEntity.noContent().build();
    }
}
