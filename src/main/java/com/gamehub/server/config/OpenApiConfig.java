package com.gamehub.server.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/** Tài liệu OpenAPI 3: /v3/api-docs (JSON) và /swagger-ui.html (giao diện). */
@Configuration
public class OpenApiConfig {

    @Bean
    OpenAPI gameHubOpenApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Game Hub 4 in 1 API")
                        .version("v1")
                        .description("""
                                REST API cho ứng dụng Game Hub (Rubik 3D, Sudoku, Xếp hình, Caro).
                                Điểm số luôn được server tính lại từ dữ liệu ván chơi; client không thể tự đặt điểm.
                                Đăng nhập qua /api/v1/auth/login rồi bấm "Authorize" và dán accessToken."""))
                .components(new Components().addSecuritySchemes("bearer", new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")));
    }
}
