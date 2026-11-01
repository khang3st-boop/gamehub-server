package com.gamehub.server;

import java.io.File;
import java.nio.file.Path;

import io.zonky.test.db.postgres.embedded.EmbeddedPostgres;

/**
 * PostgreSQL 17 chạy nhúng để thử server profile {@code prod} trên máy mà không cần cài PostgreSQL/Docker.
 * Dữ liệu giữ lại trong {@code data/pg} giữa các lần chạy. Chỉ nghe ở 127.0.0.1.
 *
 * <pre>
 *   ./gradlew localPostgres        # giữ cửa sổ này mở; Ctrl+C để dừng
 *   DB_URL=jdbc:postgresql://127.0.0.1:5433/postgres DB_USER=postgres DB_PASSWORD=  (xem hướng dẫn)
 * </pre>
 */
public final class LocalPostgres {

    private LocalPostgres() {
    }

    public static void main(String[] args) throws Exception {
        int port = Integer.parseInt(System.getenv().getOrDefault("LOCAL_PG_PORT", "5433"));
        File dir = Path.of("data", "pg").toAbsolutePath().toFile();
        boolean fresh = !new File(dir, "PG_VERSION").exists();
        EmbeddedPostgres pg = EmbeddedPostgres.builder()
                .setPort(port)
                .setDataDirectory(dir)
                .setCleanDataDirectory(false)
                .setServerConfig("listen_addresses", "127.0.0.1")
                .start();
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            try {
                pg.close();
            } catch (Exception ignored) {
                // đang tắt
            }
        }));
        System.out.println((fresh ? "Đã tạo" : "Đã mở") + " PostgreSQL nhúng tại " + dir);
        System.out.println("DB_URL=" + pg.getJdbcUrl("postgres", "postgres") .split("\\?")[0]);
        System.out.println("DB_USER=postgres  (không mật khẩu, chỉ nghe 127.0.0.1)");
        System.out.println("Nhấn Ctrl+C để dừng.");
        Thread.currentThread().join();
    }
}
