package com.gamehub.server.config;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.mock.env.MockEnvironment;

class DatabaseUrlEnvironmentPostProcessorTest {

    private final DatabaseUrlEnvironmentPostProcessor p = new DatabaseUrlEnvironmentPostProcessor();

    @Test
    void chuoiNeonCoSslVaChannelBinding() {
        Map<String, String> r = DatabaseUrlEnvironmentPostProcessor.convert(
                "postgresql://gh_user:p%40ss%2Fw0rd@ep-x-123.ap-southeast-1.aws.neon.tech/neondb"
                        + "?sslmode=require&channel_binding=require");
        assertThat(r).containsEntry("DB_URL",
                "jdbc:postgresql://ep-x-123.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")
                .containsEntry("DB_USER", "gh_user")
                .containsEntry("DB_PASSWORD", "p@ss/w0rd");
    }

    @Test
    void chuoiRenderCoCongVaDauCong() {
        Map<String, String> r = DatabaseUrlEnvironmentPostProcessor.convert(
                "postgres://u:a+b@dpg-abc-a:5432/gamehub");
        assertThat(r).containsEntry("DB_URL", "jdbc:postgresql://dpg-abc-a:5432/gamehub")
                .containsEntry("DB_PASSWORD", "a+b");
    }

    @Test
    void chuoiJdbcGiuNguyen() {
        assertThat(DatabaseUrlEnvironmentPostProcessor.convert("jdbc:postgresql://h/db"))
                .isEqualTo(Map.of("DB_URL", "jdbc:postgresql://h/db"));
    }

    @Test
    void sai_scheme_bao_loi() {
        assertThatThrownBy(() -> DatabaseUrlEnvironmentPostProcessor.convert("mysql://u:p@h/db"))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void bienDatTuongMinhDuocUuTien() {
        MockEnvironment env = new MockEnvironment()
                .withProperty("DATABASE_URL", "postgresql://u:p@h/db")
                .withProperty("DB_PASSWORD", "rieng");
        p.postProcessEnvironment(env, new SpringApplication());
        assertThat(env.getProperty("DB_URL")).isEqualTo("jdbc:postgresql://h/db");
        assertThat(env.getProperty("DB_USER")).isEqualTo("u");
        assertThat(env.getProperty("DB_PASSWORD")).isEqualTo("rieng");

        MockEnvironment co = new MockEnvironment()
                .withProperty("DATABASE_URL", "postgresql://u:p@h/db")
                .withProperty("DB_URL", "jdbc:postgresql://khac/db");
        p.postProcessEnvironment(co, new SpringApplication());
        assertThat(co.getProperty("DB_URL")).isEqualTo("jdbc:postgresql://khac/db");
        assertThat(co.getPropertySources().contains(DatabaseUrlEnvironmentPostProcessor.SOURCE)).isFalse();
    }
}
