package com.gamehub.server.realtime;

import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import com.gamehub.server.postgres.EmbeddedPostgresSupport;

/** Chạy lại toàn bộ test WebSocket/STOMP trên PostgreSQL thật (CSDL production) thay vì H2. */
class PostgresStompRealtimeTest extends StompRealtimeTest {

    @DynamicPropertySource
    static void postgres(DynamicPropertyRegistry registry) {
        EmbeddedPostgresSupport.register(registry);
    }
}
