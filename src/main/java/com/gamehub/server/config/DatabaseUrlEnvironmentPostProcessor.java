package com.gamehub.server.config;

import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.boot.EnvironmentPostProcessor;
import org.springframework.boot.SpringApplication;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.util.StringUtils;

/**
 * Các dịch vụ Cloud (Render, Neon, Railway, Heroku…) cấp chuỗi kết nối dạng
 * {@code postgresql://user:pass@host:port/db?sslmode=require} trong biến {@code DATABASE_URL}.
 * Spring cần {@code jdbc:postgresql://host:port/db} cùng user/password riêng, nên khi có
 * {@code DATABASE_URL} mà chưa đặt {@code DB_URL}, lớp này tách ra {@code DB_URL}, {@code DB_USER},
 * {@code DB_PASSWORD}. Biến đặt tường minh luôn được ưu tiên. Không ghi log mật khẩu.
 */
public class DatabaseUrlEnvironmentPostProcessor implements EnvironmentPostProcessor {

    static final String SOURCE = "gamehubDatabaseUrl";

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment env, SpringApplication app) {
        String url = env.getProperty("DATABASE_URL");
        if (!StringUtils.hasText(url) || StringUtils.hasText(env.getProperty("DB_URL"))) {
            return;
        }
        Map<String, Object> props = new LinkedHashMap<>(convert(url));
        if (StringUtils.hasText(env.getProperty("DB_USER"))) props.remove("DB_USER");
        if (StringUtils.hasText(env.getProperty("DB_PASSWORD"))) props.remove("DB_PASSWORD");
        env.getPropertySources().addLast(new MapPropertySource(SOURCE, props));
    }

    /** Tách chuỗi kết nối kiểu URI thành DB_URL (JDBC), DB_USER, DB_PASSWORD. */
    static Map<String, String> convert(String databaseUrl) {
        String s = databaseUrl.trim();
        if (s.startsWith("jdbc:")) {
            return Map.of("DB_URL", s);
        }
        URI uri = URI.create(s);
        String scheme = uri.getScheme();
        if (!"postgres".equals(scheme) && !"postgresql".equals(scheme)) {
            throw new IllegalArgumentException("DATABASE_URL phải bắt đầu bằng postgres:// hoặc postgresql://");
        }
        StringBuilder jdbc = new StringBuilder("jdbc:postgresql://").append(uri.getHost());
        if (uri.getPort() > 0) jdbc.append(':').append(uri.getPort());
        jdbc.append(uri.getRawPath() == null || uri.getRawPath().isEmpty() ? "/" : uri.getRawPath());
        String query = keepSupportedParams(uri.getRawQuery());
        if (!query.isEmpty()) jdbc.append('?').append(query);

        Map<String, String> out = new LinkedHashMap<>();
        out.put("DB_URL", jdbc.toString());
        String userInfo = uri.getRawUserInfo();
        if (userInfo != null) {
            int colon = userInfo.indexOf(':');
            out.put("DB_USER", decode(colon < 0 ? userInfo : userInfo.substring(0, colon)));
            if (colon >= 0) out.put("DB_PASSWORD", decode(userInfo.substring(colon + 1)));
        }
        return out;
    }

    /** Bỏ tham số libpq mà driver JDBC không hiểu ({@code channel_binding} của Neon). */
    private static String keepSupportedParams(String rawQuery) {
        if (rawQuery == null || rawQuery.isEmpty()) return "";
        return Arrays.stream(rawQuery.split("&"))
                .filter(p -> !p.isEmpty() && !p.startsWith("channel_binding="))
                .collect(Collectors.joining("&"));
    }

    private static String decode(String s) {
        return URLDecoder.decode(s.replace("+", "%2B"), StandardCharsets.UTF_8);
    }
}
