# Triển khai server Game Hub lên Cloud (chạy 24/7, không cần mở máy tính)

Mục tiêu: người chơi chỉ cần mở Game Hub (Android hoặc trình duyệt) và có Internet là dùng được Online.
Server Java Spring Boot + PostgreSQL chạy trên Cloud, **không phụ thuộc máy tính cá nhân**.

> ⚠️ Mọi bước đăng ký tài khoản (GitHub, Neon, Render) do **chủ dự án tự làm**. Phương án đề xuất dưới đây
> **không cần thẻ thanh toán**. Không nâng cấp gói trả phí khi chưa cân nhắc chi phí.

## 1. Phương án đề xuất (chi phí 0 đ cho đồ án)

| Thành phần | Dịch vụ | Gói | Vai trò |
|---|---|---|---|
| Server Java | **Render** — Web Service chạy Docker, vùng **Singapore** | Free | REST `/api/v1`, WebSocket `/ws`, Swagger, phục vụ luôn Flutter Web |
| CSDL | **Neon** PostgreSQL, vùng **AWS ap-southeast-1 (Singapore)** | Free | Lưu dữ liệu lâu dài (không hết hạn như Postgres free của Render) |
| Mã nguồn + CI | **GitHub** + GitHub Actions | Free | Chạy `./gradlew test` mỗi lần push; PASS thì Render tự triển khai |

Đáp ứng yêu cầu:

| Yêu cầu | Cách đáp ứng |
|---|---|
| Server độc lập máy tính | Chạy trên Render; máy tính tắt vẫn hoạt động |
| Android + Flutter Web cùng một server | APK build với `GAMEHUB_API_URL=https://<tên>.onrender.com`; bản web nằm ngay trên server đó (cùng origin) |
| Thách đấu, chat realtime, ghép theo khu vực | Có sẵn trong backend (STOMP qua `wss://<tên>.onrender.com/ws`) |
| PostgreSQL lâu dài | Neon; Flyway tự tạo/nâng cấp bảng khi khởi động |
| HTTPS/WSS | Render cấp chứng chỉ TLS tự động cho `*.onrender.com` (và tên miền riêng nếu gắn) |
| Swagger | `https://<tên>.onrender.com/swagger-ui/index.html` (bật/tắt bằng `GAMEHUB_SWAGGER`) |
| Tự khởi động lại khi lỗi | Render kiểm tra `/actuator/health`; tiến trình chết/treo → tự chạy lại. JVM có `-XX:+ExitOnOutOfMemoryError` để thoát ngay khi hết bộ nhớ thay vì treo |
| Tự động triển khai | `render.yaml` đặt `autoDeployTrigger: checksPass`: push lên `main` → GitHub Actions test → PASS mới deploy |
| Không đưa mật khẩu vào Git | `DATABASE_URL` nhập tay trên Render (`sync: false`), `GAMEHUB_JWT_SECRET` do Render tự sinh; `.gitignore` chặn `.env`, `data/`, `build/` |
| Offline khi mất mạng | App giữ nguyên chế độ khách/offline (SQLite + hàng đợi đồng bộ); có mạng lại thì tự đồng bộ |

### Giới hạn gói miễn phí (cần biết khi demo)

- **Render Free ngủ sau ~15 phút không có request.** Người đầu tiên mở app sau đó phải chờ server thức dậy
  (thường ~30–60 giây, có thể lâu hơn). Trong lúc chờ, app vẫn chơi offline được; nên mở trang web/health
  trước buổi demo vài phút để “đánh thức”.
- Khi server ngủ, **kết nối WebSocket bị ngắt**; phòng đấu/hàng chờ ghép trận đang lưu trong bộ nhớ sẽ mất.
  Dữ liệu trong PostgreSQL (tài khoản, kết quả, bạn bè, tin nhắn) không mất.
- **RAM 512 MB, CPU chia sẻ.** Đã giới hạn JVM (heap ≤ 40% RAM, SerialGC, chỉ JIT C1, 50 luồng Tomcat,
  5 kết nối DB). Đo mô phỏng trên Windows: ~420 MB bộ nhớ riêng sau tải thử. Trên Linux/container con số
  sẽ khác và **chưa đo trên Render thật** — nếu log Render báo hết bộ nhớ/khởi động lại liên tục, xem mục 6.
- Render Free có giới hạn số giờ chạy/băng thông mỗi tháng (xem trang giá của Render); đủ cho đồ án, không
  phù hợp sản phẩm thật.
- **Neon Free**: ~0,5 GB dữ liệu, CSDL tự “ngủ” khi rảnh (lần truy vấn đầu chậm thêm ~1 giây), giới hạn giờ tính toán.
- Một instance duy nhất: giới hạn tần suất, phòng đấu, hàng chờ nằm trong bộ nhớ (không chạy nhiều bản song song).
- **Địa chỉ IP người dùng sau proxy**: server dùng `X-Forwarded-For` từ proxy nội bộ (dải IP riêng) để giới
  hạn tần suất theo IP. Nếu thấy mọi người bị tính chung một IP (giới hạn đăng nhập bị chạm quá sớm), đặt biến
  `SERVER_TOMCAT_REMOTEIP_INTERNAL_PROXIES` đúng dải IP proxy của Render. **Không đặt `.*`** vì khi đó ai cũng
  giả mạo được IP.

### Khi cần chạy liên tục không ngủ (trả phí — chỉ khi chủ dự án đồng ý)

| Phương án | Chi phí tham khảo | Ghi chú |
|---|---|---|
| Render **Starter** | ~7 USD/tháng | Đổi `plan: free` → `starter` trong `render.yaml`; không ngủ, giữ nguyên mọi thứ khác |
| VPS (vd. 1 GB RAM) | ~4–6 USD/tháng | Dùng `deploy/docker-compose.yml` (Caddy tự cấp HTTPS + PostgreSQL + server, `restart: unless-stopped`); cần tên miền: chép `deploy/.env.example` thành `deploy/.env`, điền giá trị, chạy `docker compose up -d --build` trong `deploy/` |

Giá có thể thay đổi — kiểm tra trang giá chính thức trước khi đăng ký.

## 2. Đưa backend lên GitHub

Repo GitHub có **gốc là thư mục `game_hub/backend`** (Render đọc `render.yaml`, `Dockerfile` ở gốc repo;
GitHub Actions đọc `.github/workflows/ci.yml`).

```bash
cd "C:/Users/MY PC/NguyenDuongNhutKhhang_NhomOK/game_hub/backend"
git init -b main
git add .
git status        # kiểm tra: KHÔNG có .env, data/, build/, *.zip
git commit -m "Game Hub server"
```

Tạo repo trống trên GitHub (có thể để **Private**), rồi:

```bash
git remote add origin https://github.com/<tài-khoản>/gamehub-server.git
git push -u origin main
```

Thư mục `web/` (bản Flutter Web đã build, ~44 MB) **được commit** để image Docker có sẵn trang web.
Mở tab **Actions** trên GitHub, đợi workflow **CI** xanh (chạy 111 test).

## 3. Tạo PostgreSQL trên Neon

1. Đăng ký <https://neon.tech> (đăng nhập bằng GitHub được, không cần thẻ).
2. Tạo Project: Postgres 16/17, **Region: AWS Asia Pacific (Singapore)**.
3. Mục **Connection string**: chọn **tắt “Connection pooling”** (dùng kết nối trực tiếp, host không có `-pooler`),
   sao chép chuỗi dạng:
   `postgresql://<user>:<mật-khẩu>@ep-xxxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`
4. **Không** dán chuỗi này vào file nào trong repo.

Server tự đổi `DATABASE_URL` thành `DB_URL`/`DB_USER`/`DB_PASSWORD` cho JDBC (giữ `sslmode=require`).
Flyway tự tạo bảng ở lần khởi động đầu tiên.

## 4. Tạo server trên Render

1. Đăng ký <https://render.com> bằng GitHub (gói Free không yêu cầu thẻ).
2. **New → Blueprint**, chọn repo `gamehub-server`. Render đọc `render.yaml` và tạo service `gamehub-server`.
3. Khi được hỏi `DATABASE_URL`, dán chuỗi Neon ở bước 3. `GAMEHUB_JWT_SECRET` được sinh tự động.
4. Bấm **Apply**. Lần build đầu ~5–10 phút (tải Gradle, build jar, đóng gói image).
5. Khi trạng thái **Live**, mở:
   - `https://<tên>.onrender.com/actuator/health` → `{"status":"UP"}`
   - `https://<tên>.onrender.com/` → Game Hub bản web
   - `https://<tên>.onrender.com/swagger-ui/index.html` → Swagger (nút **Authorize** dán access token để thử API cần đăng nhập)

Biến môi trường (Render → service → **Environment**):

| Biến | Giá trị | Ghi chú |
|---|---|---|
| `DATABASE_URL` | chuỗi Neon | Bí mật, nhập tay |
| `GAMEHUB_JWT_SECRET` | tự sinh | Đổi giá trị = mọi người phải đăng nhập lại |
| `GAMEHUB_SWAGGER` | `true` / `false` | Tắt khi không cần quản lý API |
| `DB_POOL_SIZE` | `5` | |
| `TOMCAT_MAX_THREADS` | `50` | |
| `GAMEHUB_CORS_ORIGINS` | (tuỳ chọn) | Mặc định cho phép chính `RENDER_EXTERNAL_URL`; thêm origin khác cách nhau bằng dấu phẩy |
| `JAVA_OPTS` | (tuỳ chọn) | Ghi đè cờ JVM mặc định trong Dockerfile |

`PORT`, `RENDER_EXTERNAL_URL` do Render tự đặt.

## 5. Kết nối ứng dụng

**Flutter Web**: không cần build riêng — mở `https://<tên>.onrender.com/` trên máy tính hoặc điện thoại
(Chrome/Safari). Trang web gọi API/WSS cùng origin.

Cập nhật bản web sau khi sửa app:

```bash
cd "C:/Users/MY PC/NguyenDuongNhutKhhang_NhomOK/game_hub/backend"
sh scripts/update-web.sh "C:/Users/MY PC/StudioProjects/nguyenduongnhutkhang_4game"
git add web && git commit -m "Cập nhật Flutter Web" && git push
```

**Android APK** trỏ thẳng tới Cloud:

```bash
cd "C:/Users/MY PC/StudioProjects/nguyenduongnhutkhang_4game"
flutter build apk --release --dart-define=GAMEHUB_API_URL=https://<tên>.onrender.com
```

APK nằm ở `build/app/outputs/flutter-apk/app-release.apk`. Người dùng vẫn đổi được địa chỉ trong
**Cài đặt → Máy chủ** (ví dụ quay lại server LAN khi thử nghiệm).

## 6. Tự động hoá và xử lý sự cố

- **Tự triển khai**: sửa code → `git push` lên `main` → Actions chạy test → PASS → Render build và thay bản
  mới (không downtime ở gói trả phí; gói Free có thể gián đoạn ngắn). Test FAIL → không deploy, bản cũ vẫn chạy.
- **Tự khởi động lại**: health check `/actuator/health` thất bại liên tục hoặc tiến trình thoát → Render chạy lại.
- **Xem log**: Render → service → **Logs**. Tìm `Started GameHubApplication` (khởi động xong) hoặc `ERROR`.
- **Hết bộ nhớ / khởi động lại liên tục** (log có `OutOfMemoryError` hoặc “Out of memory”):
  1. Giảm `TOMCAT_MAX_THREADS` xuống `30`, `DB_POOL_SIZE` xuống `3`;
  2. Hoặc đặt `JAVA_OPTS=-XX:MaxRAMPercentage=35 -XX:+UseSerialGC -Xss512k -XX:ReservedCodeCacheSize=32m -XX:TieredStopAtLevel=1 -XX:+ExitOnOutOfMemoryError`;
  3. Nếu vẫn thiếu: nâng Render Starter hoặc dùng VPS (cần đồng ý chi phí).
- **Lỗi kết nối DB** (`Connection refused`, `password authentication failed`): kiểm tra `DATABASE_URL` đúng
  chuỗi Neon, có `sslmode=require`, project Neon chưa bị xoá/tạm dừng.
- **Sao lưu**: Neon có khôi phục theo thời điểm trong thời gian ngắn ở gói Free; nên định kỳ
  `pg_dump "<DATABASE_URL>" > backup.sql` trên máy (không commit file này).

## 7. Kiểm thử hai thiết bị sau khi triển khai

1. Máy tính: mở `https://<tên>.onrender.com/` → đăng ký tài khoản A.
2. Điện thoại Android (dùng **4G**, không cùng Wi-Fi với máy tính để chắc chắn đi qua Internet): cài APK ở mục 5
   → đăng ký tài khoản B.
3. A gửi lời mời kết bạn cho B; B chấp nhận. Mỗi bên thấy bên kia **Đang online**.
4. A thách đấu B (Caro/Rubik/Sudoku) → B nhận lời mời realtime → cùng vào phòng, nhắn chat hai chiều, chơi xong
   cả hai thấy kết quả giống nhau.
5. Ghép đối thủ theo khu vực: hai bên chọn cùng game + cùng khu vực → được ghép vào một phòng.
6. Tắt mạng điện thoại → chơi offline một ván → bật mạng → kết quả tự đồng bộ lên tài khoản.
7. **Tắt máy tính** → điện thoại vẫn đăng nhập/chơi Online được (chứng minh server độc lập).

## 8. Chạy thử cục bộ giống Cloud (không cần Docker)

```bash
cd "C:/Users/MY PC/NguyenDuongNhutKhhang_NhomOK/game_hub/backend"
./gradlew localPostgres          # cửa sổ 1: PostgreSQL nhúng tại 127.0.0.1:5433, dữ liệu ở data/pg
./gradlew bootJar                # cửa sổ 2
SPRING_PROFILES_ACTIVE=prod PORT=8090 GAMEHUB_SWAGGER=true \
DATABASE_URL="postgresql://postgres@127.0.0.1:5433/postgres?sslmode=disable" \
GAMEHUB_JWT_SECRET="$(openssl rand -base64 32)" DB_POOL_SIZE=5 TOMCAT_MAX_THREADS=50 \
java -Xmx205m -XX:+UseSerialGC -Xss512k -XX:ReservedCodeCacheSize=48m -XX:TieredStopAtLevel=1 -jar build/libs/gamehub-server.jar
```

Mở <http://localhost:8090/>, <http://localhost:8090/swagger-ui/index.html>. Máy ảo Android dùng `http://10.0.2.2:8090`
(Cài đặt → Máy chủ). Trên Windows, nếu Gradle/Java lỗi socket, đặt trước:
`export JAVA_TOOL_OPTIONS=-Djdk.net.unixdomain.tmpdir=C:/Users/Public`.

Có Docker Desktop thì chạy đúng image Cloud: `docker build -t gamehub . && docker run -p 8080:8080 -e DATABASE_URL=... -e GAMEHUB_JWT_SECRET=... gamehub`
(**chưa kiểm chứng** trên máy này vì chưa cài Docker).
