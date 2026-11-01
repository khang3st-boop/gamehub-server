package com.gamehub.server;

import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import com.gamehub.server.postgres.EmbeddedPostgresSupport;

/** Chạy lại toàn bộ test API REST trên PostgreSQL thật (CSDL production) thay vì H2. */
class PostgresApiIntegrationTest extends ApiIntegrationTest {

    @DynamicPropertySource
    static void postgres(DynamicPropertyRegistry registry) {
        EmbeddedPostgresSupport.register(registry);
    }
}
