package com.gamehub.server.realtime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.lang.reflect.Type;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.function.Predicate;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.messaging.converter.JacksonJsonMessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

/**
 * Kiểm thử realtime THẬT qua WebSocket/STOMP trên cổng ngẫu nhiên, hai tài khoản, hai kết nối:
 * xác thực CONNECT, chặn đăng ký kênh lạ, lời mời → phòng → sẵn sàng → đếm ngược → PLAYING,
 * tiến độ và chat phòng hai chiều qua khung STOMP, lỗi gửi riêng về /user/queue/errors,
 * và rớt kết nối được báo cho đối thủ.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class StompRealtimeTest {

    @LocalServerPort
    int port;
    @Autowired
    ObjectMapper mapper;

    final HttpClient http = HttpClient.newHttpClient();
    final ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
    WebSocketStompClient stomp;

    record Account(UUID id, String access) {
    }

    /** Một kết nối STOMP + mọi sự kiện nhận được trên các kênh đã đăng ký. */
    static final class Client {
        final StompSession session;
        final BlockingQueue<Map<String, Object>> events = new LinkedBlockingQueue<>();
        final BlockingQueue<Map<String, Object>> errors = new LinkedBlockingQueue<>();

        Client(StompSession session) {
            this.session = session;
        }

        void subscribe(String dest, BlockingQueue<Map<String, Object>> sink) {
            session.subscribe(dest, new StompFrameHandler() {
                @Override
                public Type getPayloadType(StompHeaders headers) {
                    return Map.class;
                }

                @Override
                @SuppressWarnings("unchecked")
                public void handleFrame(StompHeaders headers, Object payload) {
                    sink.add((Map<String, Object>) payload);
                }
            });
        }

        /** Chờ sự kiện thoả điều kiện; sự kiện khác được giữ lại cho lần chờ sau (không phụ thuộc thứ tự). */
        Map<String, Object> await(BlockingQueue<Map<String, Object>> q, Predicate<Map<String, Object>> p, long seconds)
                throws InterruptedException {
            List<Map<String, Object>> skipped = new ArrayList<>();
            long end = System.nanoTime() + TimeUnit.SECONDS.toNanos(seconds);
            try {
                while (System.nanoTime() < end) {
                    Map<String, Object> e = q.poll(200, TimeUnit.MILLISECONDS);
                    if (e == null) {
                        continue;
                    }
                    if (p.test(e)) {
                        return e;
                    }
                    skipped.add(e);
                }
            } finally {
                List<Map<String, Object>> rest = new ArrayList<>();
                q.drainTo(rest);
                q.addAll(skipped);
                q.addAll(rest);
            }
            throw new AssertionError("Không nhận được sự kiện mong đợi trong " + seconds + " giây");
        }

        Map<String, Object> awaitType(String type) throws InterruptedException {
            return await(events, e -> type.equals(e.get("type")), 8);
        }
    }

    StompRealtimeTest() {
        scheduler.setPoolSize(2);
        scheduler.initialize();
    }

    @AfterEach
    void stop() {
        if (stomp != null) {
            stomp.stop();
        }
        scheduler.shutdown();
    }

    // ------------------------------------------------------------------ helpers

    String url(String path) {
        return "http://localhost:" + port + path;
    }

    JsonNode call(String method, String path, Account a, Object body, int expected) throws Exception {
        HttpRequest.Builder b = HttpRequest.newBuilder(URI.create(url(path)))
                .header("Content-Type", "application/json")
                .method(method, body == null ? HttpRequest.BodyPublishers.noBody()
                        : HttpRequest.BodyPublishers.ofString(mapper.writeValueAsString(body)));
        if (a != null) {
            b.header("Authorization", "Bearer " + a.access());
        }
        HttpResponse<String> r = http.send(b.build(), HttpResponse.BodyHandlers.ofString());
        if (expected == 0) {
            assertThat(r.statusCode() / 100).as(method + " " + path + " → " + r.body()).isEqualTo(2);
        } else {
            assertThat(r.statusCode()).as(method + " " + path + " → " + r.body()).isEqualTo(expected);
        }
        return r.body().isEmpty() ? null : mapper.readTree(r.body());
    }

    Account register(String prefix) throws Exception {
        String username = prefix + "_" + Long.toString(ThreadLocalRandom.current().nextLong(1L << 40), 36);
        JsonNode j = call("POST", "/api/v1/auth/register", null,
                Map.of("username", username, "displayName", "Người " + prefix, "password", "matkhau123"), 201);
        return new Account(UUID.fromString(j.get("user").get("id").asString()), j.get("accessToken").asString());
    }

    WebSocketStompClient stompClient() {
        if (stomp == null) {
            stomp = new WebSocketStompClient(new StandardWebSocketClient());
            stomp.setMessageConverter(new JacksonJsonMessageConverter());
            stomp.setTaskScheduler(scheduler);
        }
        return stomp;
    }

    StompSession connectRaw(String token) throws Exception {
        StompHeaders connect = new StompHeaders();
        if (token != null) {
            connect.add("Authorization", "Bearer " + token);
        }
        return stompClient().connectAsync(URI.create("ws://localhost:" + port + "/ws"), new WebSocketHttpHeaders(),
                connect, new StompSessionHandlerAdapter() {
                }).get(5, TimeUnit.SECONDS);
    }

    Client connect(Account a) throws Exception {
        Client c = new Client(connectRaw(a.access()));
        c.subscribe("/user/queue/events", c.events);
        c.subscribe("/user/queue/errors", c.errors);
        Thread.sleep(300); // để SUBSCRIBE được xử lý trước khi sự kiện đầu tiên được phát
        return c;
    }

    void befriend(Account a, Account b) throws Exception {
        call("POST", "/api/v1/friends/requests", a, Map.of("userId", b.id()), 0);
        call("POST", "/api/v1/friends/requests/" + a.id() + "/accept", b, null, 0);
    }

    @SuppressWarnings("unchecked")
    static Map<String, Object> data(Map<String, Object> event) {
        return (Map<String, Object>) event.get("data");
    }

    // ------------------------------------------------------------------ tests

    @Test
    void connectWithoutValidTokenIsRejected() {
        assertThatThrownBy(() -> connectRaw(null)).isInstanceOf(Exception.class);
        assertThatThrownBy(() -> connectRaw("khong-phai-jwt")).isInstanceOf(Exception.class);
    }

    @Test
    void twoPlayersInviteReadyPlayAndChatOverStomp() throws Exception {
        Account a = register("wsa");
        Account b = register("wsb");
        befriend(a, b);
        Client ca = connect(a);
        Client cb = connect(b);

        // A mời B qua REST → B nhận invite.received qua WebSocket.
        JsonNode inv = call("POST", "/api/v1/challenges/invites", a,
                Map.of("userId", b.id(), "game", "rubik", "mode", "3x3"), 201);
        Map<String, Object> received = cb.awaitType("invite.received");
        assertThat(data(received).get("id")).isEqualTo(inv.get("id").asString());

        // B chấp nhận → A nhận invite.accepted, cả hai nhận match.created với CÙNG đề.
        JsonNode accepted = call("POST", "/api/v1/challenges/invites/" + inv.get("id").asString() + "/accept", b,
                null, 200);
        String matchId = accepted.get("matchId").asString();
        assertThat(data(ca.awaitType("invite.accepted")).get("matchId")).isEqualTo(matchId);
        Map<String, Object> createdA = data(ca.awaitType("match.created"));
        Map<String, Object> createdB = data(cb.awaitType("match.created"));
        assertThat(createdA.get("config")).isEqualTo(createdB.get("config"));

        // Người ngoài không được đăng ký kênh phòng; người chơi thì được.
        Account outsider = register("wsx");
        Client cx = connect(outsider);
        BlockingQueue<Map<String, Object>> spy = new LinkedBlockingQueue<>();
        cx.subscribe("/topic/match." + matchId, spy);

        BlockingQueue<Map<String, Object>> roomA = new LinkedBlockingQueue<>();
        BlockingQueue<Map<String, Object>> roomB = new LinkedBlockingQueue<>();
        ca.subscribe("/topic/match." + matchId, roomA);
        cb.subscribe("/topic/match." + matchId, roomB);
        Thread.sleep(300);

        // Sẵn sàng qua khung STOMP → COUNTDOWN → (sau 3 giây đếm ngược thật) PLAYING.
        ca.session.send("/app/match.ready", Map.of("matchId", matchId, "ready", true));
        cb.session.send("/app/match.ready", Map.of("matchId", matchId));
        ca.await(roomA, e -> "match.state".equals(e.get("type")) && "COUNTDOWN".equals(data(e).get("status")), 8);
        cb.await(roomB, e -> "match.state".equals(e.get("type")) && "PLAYING".equals(data(e).get("status")), 10);

        // Tiến độ của A tới B theo thời gian thực.
        ca.session.send("/app/match.progress", Map.of("matchId", matchId, "progress", 40));
        Map<String, Object> prog = cb.await(roomB, e -> "match.progress".equals(e.get("type")), 5);
        assertThat(data(prog).get("userId")).isEqualTo(a.id().toString());

        // Chat phòng hai chiều.
        ca.session.send("/app/match.chat", Map.of("matchId", matchId, "text", "Chào bạn!", "clientId", "c-1"));
        Map<String, Object> msgAtB = cb.await(roomB, e -> "match.chat".equals(e.get("type")), 5);
        assertThat(data(msgAtB).get("text")).isEqualTo("Chào bạn!");
        cb.session.send("/app/match.chat", Map.of("matchId", matchId, "text", "Chơi thôi", "clientId", "c-2"));
        Map<String, Object> msgAtA = ca.await(roomA,
                e -> "match.chat".equals(e.get("type")) && "Chơi thôi".equals(data(e).get("text")), 5);
        assertThat(data(msgAtA).get("clientId")).isEqualTo("c-2");

        // Nước đi Caro trong trận Rubik → lỗi gửi RIÊNG cho người gửi, không phát vào phòng.
        ca.session.send("/app/match.move", Map.of("matchId", matchId, "cell", 0, "index", 0));
        Map<String, Object> err = ca.await(ca.errors, e -> true, 5);
        assertThat(err.get("code")).isEqualTo("WRONG_GAME");

        // Người ngoài không nhận được bất cứ gì từ phòng.
        assertThat(spy.poll(500, TimeUnit.MILLISECONDS)).isNull();

        // B rớt kết nối → A nhận match.connection(connected=false).
        cb.session.disconnect();
        Map<String, Object> conn = ca.await(roomA,
                e -> "match.connection".equals(e.get("type")) && Boolean.FALSE.equals(data(e).get("connected")), 8);
        assertThat(data(conn).get("userId")).isEqualTo(b.id().toString());

        // Server vẫn giữ trận ở PLAYING trong thời gian ân hạn (chưa xử thua ngay).
        JsonNode m = call("GET", "/api/v1/matches/" + matchId, a, null, 200);
        assertThat(m.get("status").asString()).isEqualTo("PLAYING");
    }
}
