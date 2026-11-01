package com.gamehub.server.config;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.gamehub.server.common.ErrorResponse;

import tools.jackson.databind.ObjectMapper;

/**
 * API không trạng thái: xác thực bằng access token JWT (Bearer). CSRF tắt vì không dùng cookie.
 * Lỗi 401/403 trả về cùng định dạng {@link ErrorResponse} như các lỗi khác.
 */
@Configuration
public class SecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
        // Mặc định BCrypt, có tiền tố {bcrypt} để có thể nâng thuật toán sau này.
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    /**
     * CORS chỉ cho các origin khai báo trong {@code gamehub.cors.allowed-origins}
     * (biến môi trường GAMEHUB_CORS_ORIGINS). Bản web build cùng tên miền với API thì không cần CORS.
     */
    @Bean
    CorsConfigurationSource corsConfigurationSource(AppProperties props) {
        CorsConfiguration c = new CorsConfiguration();
        c.setAllowedOriginPatterns(props.cors().allowedOrigins());
        c.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        c.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        c.setAllowCredentials(false);
        c.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", c);
        source.registerCorsConfiguration("/ws/**", c);
        return source;
    }

    /** Tiền tố do API/realtime/công cụ quản trị xử lý; mọi đường dẫn GET khác là file Flutter Web. */
    private static final List<String> SERVER_PATHS =
            List.of("/api/", "/ws", "/swagger-ui", "/v3/api-docs", "/actuator", "/error");

    static boolean isWebAsset(HttpServletRequest req) {
        if (!HttpMethod.GET.matches(req.getMethod()) && !HttpMethod.HEAD.matches(req.getMethod())) return false;
        String path = req.getRequestURI().substring(req.getContextPath().length());
        return SERVER_PATHS.stream().noneMatch(path::startsWith);
    }

    /**
     * File tĩnh của Flutter Web (index.html, main.dart.js, canvaskit, assets): công khai, không có dữ liệu
     * người dùng. Tắt header no-store mặc định của Spring Security để trình duyệt điện thoại không phải tải
     * lại vài MB mỗi lần mở; Spring vẫn gửi {@code Cache-Control: no-cache} + ETag nên bản mới có hiệu lực ngay.
     */
    @Bean
    @Order(1)
    SecurityFilterChain webAssets(HttpSecurity http) throws Exception {
        http.securityMatcher(SecurityConfig::isWebAsset)
                .csrf(c -> c.disable())
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .headers(h -> h.cacheControl(c -> c.disable()))
                .authorizeHttpRequests(a -> a.anyRequest().permitAll());
        return http.build();
    }

    @Bean
    @Order(2)
    SecurityFilterChain api(HttpSecurity http, ObjectMapper mapper) throws Exception {
        AuthenticationEntryPoint unauthorized = (req, res, ex) ->
                write(mapper, req, res, HttpServletResponse.SC_UNAUTHORIZED, "UNAUTHORIZED",
                        "Bạn cần đăng nhập hoặc phiên đăng nhập đã hết hạn");
        AccessDeniedHandler denied = (req, res, ex) ->
                write(mapper, req, res, HttpServletResponse.SC_FORBIDDEN, "FORBIDDEN", "Không có quyền truy cập");

        http.csrf(c -> c.disable())
                .cors(Customizer.withDefaults())
                .httpBasic(b -> b.disable())
                .formLogin(f -> f.disable())
                .logout(l -> l.disable())
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(a -> a
                        .requestMatchers("/api/v1/auth/**", "/api/v1/health").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/leaderboard", "/api/v1/leaderboards",
                                "/api/v1/leaderboards/**").permitAll()
                        // Bắt tay WebSocket: token được kiểm tra trong khung STOMP CONNECT (StompAuthInterceptor).
                        .requestMatchers("/ws", "/ws/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/daily/today", "/api/v1/daily/*/leaderboard")
                        .permitAll()
                        .requestMatchers("/swagger-ui.html", "/swagger-ui/**", "/v3/api-docs", "/v3/api-docs/**")
                        .permitAll()
                        .requestMatchers("/actuator/health", "/actuator/health/**").permitAll()
                        .requestMatchers("/error").permitAll()
                        .anyRequest().authenticated())
                .oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()).authenticationEntryPoint(unauthorized))
                .exceptionHandling(e -> e.authenticationEntryPoint(unauthorized).accessDeniedHandler(denied));
        return http.build();
    }

    private static void write(ObjectMapper mapper, HttpServletRequest req, HttpServletResponse res, int status,
            String code, String message) throws IOException {
        res.setStatus(status);
        res.setContentType(MediaType.APPLICATION_JSON_VALUE);
        res.setCharacterEncoding("UTF-8");
        mapper.writeValue(res.getOutputStream(), ErrorResponse.of(code, message, req.getRequestURI()));
    }
}
