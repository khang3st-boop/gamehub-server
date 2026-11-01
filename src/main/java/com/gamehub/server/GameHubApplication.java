package com.gamehub.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/** Điểm khởi động REST API của Game Hub 4 in 1 (tiền tố {@code /api/v1}). */
@SpringBootApplication
@ConfigurationPropertiesScan
@EnableScheduling
public class GameHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(GameHubApplication.class, args);
    }
}
