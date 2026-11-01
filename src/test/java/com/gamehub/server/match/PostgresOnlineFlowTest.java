package com.gamehub.server.match;

import org.springframework.context.annotation.Import;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import com.gamehub.server.postgres.EmbeddedPostgresSupport;

/** Chạy lại toàn bộ test luồng đấu online trên PostgreSQL thật (CSDL production) thay vì H2. */
// Cấu hình lồng (đồng hồ giả) của lớp cha không tự áp dụng cho lớp con → nhập tường minh.
@Import(OnlineFlowTest.Config.class)
class PostgresOnlineFlowTest extends OnlineFlowTest {

    @DynamicPropertySource
    static void postgres(DynamicPropertyRegistry registry) {
        EmbeddedPostgresSupport.register(registry);
    }
}
