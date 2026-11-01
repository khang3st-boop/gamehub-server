package com.gamehub.server.auth;

import java.nio.charset.StandardCharsets;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamehub.server.auth.AuthDtos.AuthResponse;
import com.gamehub.server.auth.AuthDtos.LoginRequest;
import com.gamehub.server.auth.AuthDtos.RegisterRequest;
import com.gamehub.server.common.ApiException;
import com.gamehub.server.common.RateLimiter;
import com.gamehub.server.config.AppProperties;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserDto;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.user.UserService;

@Service
public class AuthService {

    static final int LOGIN_FAILURES = 10;
    static final Duration LOGIN_WINDOW = Duration.ofMinutes(15);
    static final int REGISTRATIONS_PER_IP = 20;
    static final Duration REGISTER_WINDOW = Duration.ofHours(1);

    private final UserRepository users;
    private final RefreshTokenRepository refreshTokens;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokens;
    private final RateLimiter limiter;
    private final AppProperties props;
    private final Clock clock;
    /** Băm giả để thời gian phản hồi khi sai tên đăng nhập tương đương khi sai mật khẩu. */
    private final String dummyHash;

    public AuthService(UserRepository users, RefreshTokenRepository refreshTokens, PasswordEncoder passwordEncoder,
            TokenService tokens, RateLimiter limiter, AppProperties props, Clock clock) {
        this.users = users;
        this.refreshTokens = refreshTokens;
        this.passwordEncoder = passwordEncoder;
        this.tokens = tokens;
        this.limiter = limiter;
        this.props = props;
        this.clock = clock;
        this.dummyHash = passwordEncoder.encode("dummy-password-0");
    }

    @Transactional
    public AuthResponse register(RegisterRequest req, String clientIp) {
        limiter.hit("register:" + clientIp, REGISTRATIONS_PER_IP, REGISTER_WINDOW);
        if (req.password().getBytes(StandardCharsets.UTF_8).length > 72) {
            throw ApiException.badRequest("VALIDATION", "Mật khẩu quá dài (tối đa 72 byte)");
        }
        String key = User.key(req.username());
        if (users.existsByUsernameKey(key)) {
            throw ApiException.conflict("USERNAME_TAKEN", "Tên đăng nhập đã được sử dụng");
        }
        UserService.requireAllowedName(req.displayName().trim());
        UserService.requireAllowedName(req.username().trim());
        int color = ThreadLocalRandom.current().nextInt(8);
        User user = users.save(new User(req.username().trim(), req.displayName().trim(),
                passwordEncoder.encode(req.password()), color, Instant.now(clock)));
        return issue(user, UUID.randomUUID());
    }

    @Transactional
    public AuthResponse login(LoginRequest req) {
        String key = User.key(req.username());
        String limitKey = "login:" + key;
        limiter.check(limitKey, LOGIN_FAILURES, LOGIN_WINDOW);
        Optional<User> found = users.findByUsernameKey(key);
        boolean ok = passwordEncoder.matches(req.password(), found.map(User::getPasswordHash).orElse(dummyHash));
        if (found.isEmpty() || !ok) {
            limiter.record(limitKey);
            throw ApiException.unauthorized("INVALID_CREDENTIALS", "Tên đăng nhập hoặc mật khẩu không đúng");
        }
        limiter.reset(limitKey);
        User user = found.get();
        if (passwordEncoder.upgradeEncoding(user.getPasswordHash())) {
            user.setPasswordHash(passwordEncoder.encode(req.password()));
        }
        return issue(user, UUID.randomUUID());
    }

    /**
     * Đổi refresh token lấy cặp token mới (xoay vòng). Nếu token đã bị thu hồi mà vẫn được dùng
     * lại — dấu hiệu bị đánh cắp — thu hồi toàn bộ họ token đó.
     */
    @Transactional(noRollbackFor = ApiException.class)
    public AuthResponse refresh(String refreshToken) {
        Instant now = Instant.now(clock);
        RefreshToken stored = refreshTokens.findForUpdate(TokenService.sha256(refreshToken))
                .orElseThrow(() -> ApiException.unauthorized("INVALID_REFRESH_TOKEN", "Phiên đăng nhập không hợp lệ"));
        if (stored.getRevokedAt() != null) {
            refreshTokens.revokeFamily(stored.getFamilyId(), now);
            throw ApiException.unauthorized("REFRESH_TOKEN_REUSED", "Phiên đăng nhập đã bị thu hồi, vui lòng đăng nhập lại");
        }
        if (!stored.getExpiresAt().isAfter(now)) {
            throw ApiException.unauthorized("REFRESH_TOKEN_EXPIRED", "Phiên đăng nhập đã hết hạn");
        }
        stored.revoke(now);
        User user = users.findById(stored.getUserId())
                .orElseThrow(() -> ApiException.unauthorized("USER_NOT_FOUND", "Tài khoản không còn tồn tại"));
        return issue(user, stored.getFamilyId());
    }

    /** Đăng xuất: thu hồi cả họ refresh token. Không báo lỗi nếu token không tồn tại. */
    @Transactional
    public void logout(String refreshToken) {
        refreshTokens.findForUpdate(TokenService.sha256(refreshToken))
                .ifPresent(t -> refreshTokens.revokeFamily(t.getFamilyId(), Instant.now(clock)));
    }

    private AuthResponse issue(User user, UUID family) {
        Instant now = Instant.now(clock);
        String refresh = tokens.newRefreshToken();
        refreshTokens.save(new RefreshToken(user.getId(), family, TokenService.sha256(refresh), now,
                now.plus(props.jwt().refreshTtl())));
        return new AuthResponse(tokens.accessToken(user), refresh, tokens.accessTtlSeconds(), "Bearer",
                UserDto.of(user));
    }

    @Scheduled(cron = "0 17 3 * * *")
    @Transactional
    public void purgeExpiredRefreshTokens() {
        refreshTokens.deleteExpired(Instant.now(clock));
    }
}
