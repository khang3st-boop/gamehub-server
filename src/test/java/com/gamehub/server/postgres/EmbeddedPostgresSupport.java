package com.gamehub.server.postgres;

import java.sql.Connection;
import java.sql.Statement;
import java.util.UUID;

import org.springframework.test.context.DynamicPropertyRegistry;

import io.zonky.test.db.postgres.embedded.EmbeddedPostgres;

/**
 * Một PostgreSQL 17 nhúng dùng chung cho cả lần chạy test; mỗi lớp test nhận một database mới
 * (Flyway chạy từ đầu, dữ liệu không lẫn giữa các lớp).
 */
public final class EmbeddedPostgresSupport {

    private static EmbeddedPostgres pg;

    private EmbeddedPostgresSupport() {
    }

    private static synchronized EmbeddedPostgres server() throws Exception {
        if (pg == null) {
            pg = EmbeddedPostgres.builder().start();
            Runtime.getRuntime().addShutdownHook(new Thread(() -> {
                try {
                    pg.close();
                } catch (Exception ignored) {
                    // đang tắt
                }
            }));
        }
        return pg;
    }

    /** Tạo database mới và trỏ datasource của Spring vào đó (thay H2 của profile test). */
    public static void register(DynamicPropertyRegistry registry) {
        try {
            EmbeddedPostgres s = server();
            String db = "gh_" + UUID.randomUUID().toString().replace("-", "");
            try (Connection c = s.getPostgresDatabase().getConnection(); Statement st = c.createStatement()) {
                st.execute("CREATE DATABASE " + db);
            }
            registry.add("spring.datasource.url", () -> s.getJdbcUrl("postgres", db));
            registry.add("spring.datasource.username", () -> "postgres");
            registry.add("spring.datasource.password", () -> "");
        } catch (Exception e) {
            throw new IllegalStateException("Không khởi động được PostgreSQL nhúng", e);
        }
    }
}
