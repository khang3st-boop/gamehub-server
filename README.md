# Game Hub — server Java Spring Boot

Backend Online cho Game Hub (Android + Flutter Web): tài khoản JWT, kết quả/bảng xếp hạng, bạn bè,
thách đấu, ghép đối thủ theo khu vực, phòng đấu và chat realtime (STOMP qua WebSocket `/ws`).
Java 21, Spring Boot 4, PostgreSQL + Flyway, Gradle Groovy.

## Chạy trên máy (Windows, Git Bash)

```bash
./gradlew bootRun --args='--spring.profiles.active=dev'   # H2 cục bộ, không cần PostgreSQL
./gradlew test                                             # toàn bộ test (có PostgreSQL nhúng)
```

Swagger: <http://localhost:8080/swagger-ui/index.html> · Health: <http://localhost:8080/actuator/health>
Nếu Gradle báo lỗi socket trên Windows: `export JAVA_TOOL_OPTIONS=-Djdk.net.unixdomain.tmpdir=C:/Users/Public`.

## Triển khai Cloud (Render + Neon, miễn phí)

Xem [docs/HUONG_DAN_CLOUD.md](docs/HUONG_DAN_CLOUD.md). Tóm tắt:

| File | Vai trò |
|---|---|
| `Dockerfile` | Build jar bằng Gradle wrapper, chạy trên JRE 21, kèm Flutter Web trong `web/` |
| `render.yaml` | Blueprint Render: Web Service Free (Singapore), health check, tự deploy khi CI PASS |
| `.github/workflows/ci.yml` | GitHub Actions chạy `./gradlew test` mỗi lần push/PR |
| `deploy/` | Phương án VPS: Docker Compose + Caddy (HTTPS) + PostgreSQL |
| `scripts/update-web.sh` | Build lại Flutter Web và chép vào `web/` |

Cấu hình bằng biến môi trường (`DATABASE_URL`, `GAMEHUB_JWT_SECRET`, `GAMEHUB_SWAGGER`, ...).
**Không commit** `.env`, chuỗi kết nối CSDL hay khoá JWT.
