# Build nhiều tầng: tầng 1 build jar bằng Gradle wrapper của dự án, tầng 2 chỉ có JRE.
# Dùng chung cho Render (render.yaml), VPS (deploy/docker-compose.yml) và chạy thử bằng Docker Desktop.
FROM eclipse-temurin:21-jdk AS build
WORKDIR /src
COPY gradlew settings.gradle build.gradle ./
COPY gradle ./gradle
RUN chmod +x gradlew && ./gradlew --no-daemon dependencies > /dev/null
COPY src ./src
RUN ./gradlew --no-daemon bootJar -x test

FROM eclipse-temurin:21-jre
RUN useradd --system --uid 10001 gamehub
WORKDIR /app
COPY --from=build /src/build/libs/gamehub-server.jar app.jar
# Bản Flutter Web đã build (scripts/update-web.sh) → server phục vụ trang web cùng tên miền với API/WSS.
COPY web ./web
USER gamehub
EXPOSE 8080
# PORT: Render/Heroku-style đặt sẵn; mặc định 8080.
# JVM cho máy nhỏ (Render free 512 MB): heap ≤ 40% RAM container (~205 MB; phần còn lại cho metaspace/luồng),
# SerialGC + chỉ JIT C1 + code cache 48 MB để ít bộ nhớ phụ, stack luồng 512 KB; hết bộ nhớ thì thoát ngay để nền tảng tự khởi động lại.
ENV SPRING_PROFILES_ACTIVE=prod \
    GAMEHUB_WEB_DIR=/app/web \
    JAVA_OPTS="-XX:MaxRAMPercentage=40 -XX:+UseSerialGC -Xss512k -XX:ReservedCodeCacheSize=48m -XX:TieredStopAtLevel=1 -XX:+ExitOnOutOfMemoryError"
HEALTHCHECK --interval=30s --timeout=5s --start-period=90s --retries=3 \
  CMD bash -c 'exec 3<>/dev/tcp/127.0.0.1/${PORT:-8080} && printf "GET /actuator/health HTTP/1.0\r\n\r\n" >&3 && grep -q UP <&3'
ENTRYPOINT ["sh", "-c", "exec java $JAVA_OPTS -jar /app/app.jar"]
