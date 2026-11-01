package com.gamehub.server.auth;

import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

import com.gamehub.server.config.AppProperties;
import com.nimbusds.jose.jwk.source.ImmutableSecret;

/**
 * Khoá HMAC-SHA256 ký access token. Lấy từ {@code gamehub.jwt.secret} (biến môi trường
 * {@code GAMEHUB_JWT_SECRET}). Profile {@code prod} bắt buộc phải cấu hình; profile khác nếu
 * để trống sẽ sinh khoá ngẫu nhiên (token mất hiệu lực khi khởi động lại).
 */
@Configuration
public class JwtKeyConfig {

    private static final Logger log = LoggerFactory.getLogger(JwtKeyConfig.class);

    @Bean
    SecretKey jwtSigningKey(AppProperties props, Environment env) {
        String secret = props.jwt().secret();
        if (secret == null || secret.isBlank()) {
            if (env.matchesProfiles("prod")) {
                throw new IllegalStateException("Thiếu GAMEHUB_JWT_SECRET (≥ 32 byte) cho profile prod");
            }
            byte[] random = new byte[32];
            new SecureRandom().nextBytes(random);
            log.warn("GAMEHUB_JWT_SECRET chưa được đặt — dùng khoá ngẫu nhiên tạm thời (chỉ dành cho dev/test)");
            return new SecretKeySpec(random, "HmacSHA256");
        }
        byte[] bytes = secret.getBytes(StandardCharsets.UTF_8);
        if (bytes.length < 32) {
            throw new IllegalStateException("GAMEHUB_JWT_SECRET phải dài ít nhất 32 byte");
        }
        return new SecretKeySpec(bytes, "HmacSHA256");
    }

    @Bean
    JwtEncoder jwtEncoder(SecretKey key) {
        return new NimbusJwtEncoder(new ImmutableSecret<>(key));
    }

    @Bean
    JwtDecoder jwtDecoder(SecretKey key, AppProperties props) {
        NimbusJwtDecoder decoder = NimbusJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();
        decoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(
                JwtValidators.createDefaultWithIssuer(props.jwt().issuer())));
        return decoder;
    }
}
