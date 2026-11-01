package com.gamehub.server.match;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicReference;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import com.gamehub.server.matchmaking.MatchmakingService;
import com.gamehub.server.presence.PresenceService;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

/**
 * Luồng online qua REST: kết bạn → mời → phòng → sẵn sàng → đếm ngược → chơi → server xử kết quả.
 * Đồng hồ giả để kiểm tra hẹn giờ (hết hạn sẵn sàng, hết lượt Caro, rớt mạng) mà không phải chờ thật.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class OnlineFlowTest {

    /** Đồng hồ chỉ tiến về phía trước theo lệnh của test. */
    static final class MutableClock extends Clock {
        final AtomicReference<Instant> now = new AtomicReference<>(Instant.now().truncatedTo(java.time.temporal.ChronoUnit.MILLIS));

        void advance(Duration d) {
            now.updateAndGet(t -> t.plus(d));
        }

        @Override
        public ZoneId getZone() {
            return ZoneOffset.UTC;
        }

        @Override
        public Clock withZone(ZoneId zone) {
            return this;
        }

        @Override
        public Instant instant() {
            return now.get();
        }
    }

    @TestConfiguration
    static class Config {
        @Bean
        @Primary
        MutableClock testClock() {
            return new MutableClock();
        }
    }

    record Account(UUID id, String access) {
    }

    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper mapper;
    @Autowired
    MutableClock clock;
    @Autowired
    PresenceService presence;
    @Autowired
    MatchService matches;
    @Autowired
    MatchmakingService matchmaking;
    @Autowired
    UserRatingRepository ratings;

    // ------------------------------------------------------------------ helpers

    String json(Object o) {
        return mapper.writeValueAsString(o);
    }

    JsonNode body(MvcResult r) throws Exception {
        return mapper.readTree(r.getResponse().getContentAsString());
    }

    Account register(String prefix) throws Exception {
        String username = prefix + "_" + Long.toString(ThreadLocalRandom.current().nextLong(1L << 40), 36);
        String ip = "10.9." + ThreadLocalRandom.current().nextInt(256) + "." + ThreadLocalRandom.current().nextInt(1, 255);
        MvcResult r = mvc.perform(post("/api/v1/auth/register").with(req -> {
            req.setRemoteAddr(ip);
            return req;
        }).contentType(MediaType.APPLICATION_JSON).content(json(Map.of("username", username,
                "displayName", "Người " + prefix, "password", "matkhau123"))))
                .andExpect(status().isCreated()).andReturn();
        JsonNode j = body(r);
        Account a = new Account(UUID.fromString(j.get("user").get("id").asString()), j.get("accessToken").asString());
        presence.connected(a.id(), "s-" + a.id());
        return a;
    }

    static MockHttpServletRequestBuilder as(MockHttpServletRequestBuilder b, Account a) {
        return b.header("Authorization", "Bearer " + a.access());
    }

    MockHttpServletRequestBuilder postJson(String url, Account a, Object payload) {
        return as(post(url), a).contentType(MediaType.APPLICATION_JSON).content(json(payload));
    }

    void befriend(Account a, Account b) throws Exception {
        mvc.perform(postJson("/api/v1/friends/requests", a, Map.of("userId", b.id())))
                .andExpect(status().is2xxSuccessful());
        mvc.perform(as(post("/api/v1/friends/requests/" + a.id() + "/accept"), b))
                .andExpect(status().is2xxSuccessful());
    }

    /** A mời B (đã là bạn), B chấp nhận → trả về matchId. */
    UUID inviteAndAccept(Account a, Account b, String game, String mode) throws Exception {
        JsonNode inv = body(mvc.perform(postJson("/api/v1/challenges/invites", a,
                Map.of("userId", b.id(), "game", game, "mode", mode))).andExpect(status().isCreated()).andReturn());
        JsonNode acc = body(mvc.perform(as(post("/api/v1/challenges/invites/" + inv.get("id").asString() + "/accept"), b))
                .andExpect(status().isOk()).andExpect(jsonPath("$.status").value("ACCEPTED")).andReturn());
        return UUID.fromString(acc.get("matchId").asString());
    }

    JsonNode match(UUID id, Account a) throws Exception {
        return body(mvc.perform(as(get("/api/v1/matches/" + id), a)).andExpect(status().isOk()).andReturn());
    }

    /** Hai người bấm Sẵn sàng, chờ hết đếm ngược. */
    void readyAndStart(UUID id, Account a, Account b) throws Exception {
        mvc.perform(as(post("/api/v1/matches/" + id + "/ready"), a))
                .andExpect(jsonPath("$.status").value("WAITING_READY"));
        mvc.perform(as(post("/api/v1/matches/" + id + "/ready"), b))
                .andExpect(jsonPath("$.status").value("COUNTDOWN"));
        clock.advance(Duration.ofSeconds(4));
        matches.tick();
        assertThat(match(id, a).get("status").asString()).isEqualTo("PLAYING");
    }

    static String inverse(String scramble) {
        return MatchVerifierTest.inverse(scramble);
    }

    // ------------------------------------------------------------------ bạn bè

    @Test
    void friendRequestsNeedConsentAndBlockRemovesFriendship() throws Exception {
        Account a = register("fra");
        Account b = register("frb");
        mvc.perform(postJson("/api/v1/friends/requests", a, Map.of("userId", a.id())))
                .andExpect(status().isBadRequest());
        mvc.perform(postJson("/api/v1/friends/requests", a, Map.of("userId", b.id())))
                .andExpect(status().is2xxSuccessful()).andExpect(jsonPath("$.status").value("PENDING"));
        mvc.perform(as(get("/api/v1/friends/requests"), b)).andExpect(jsonPath("$.incoming", hasSize(1)));
        mvc.perform(as(get("/api/v1/friends"), a)).andExpect(jsonPath("$", hasSize(0)));
        mvc.perform(as(post("/api/v1/friends/requests/" + a.id() + "/accept"), b))
                .andExpect(status().is2xxSuccessful());
        mvc.perform(as(get("/api/v1/friends"), a)).andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].user.id").value(b.id().toString()))
                .andExpect(jsonPath("$[0].status").value("ONLINE"));
        mvc.perform(as(post("/api/v1/users/" + b.id() + "/block"), a)).andExpect(status().isNoContent());
        mvc.perform(as(get("/api/v1/friends"), b)).andExpect(jsonPath("$", hasSize(0)));
        mvc.perform(postJson("/api/v1/friends/requests", b, Map.of("userId", a.id())))
                .andExpect(status().is4xxClientError());
    }

    @Test
    void reservedDisplayNamesAreRejected() throws Exception {
        mvc.perform(post("/api/v1/auth/register").with(req -> {
            req.setRemoteAddr("10.8.0.1");
            return req;
        }).contentType(MediaType.APPLICATION_JSON).content(json(Map.of("username", "gia_danh_1",
                "displayName", "Admin", "password", "matkhau123"))))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.code").value("NAME_RESERVED"));
    }

    // ------------------------------------------------------------------ lời mời + Rubik

    @Test
    void inviteOnlyFriendsOnlineThenRubikRaceVerifiedByServer() throws Exception {
        Account a = register("ria");
        Account b = register("rib");
        Account stranger = register("ris");
        mvc.perform(postJson("/api/v1/challenges/invites", a,
                Map.of("userId", stranger.id(), "game", "rubik", "mode", "3x3")))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("FRIENDS_ONLY"));
        befriend(a, b);
        presence.disconnected(b.id(), "s-" + b.id());
        mvc.perform(postJson("/api/v1/challenges/invites", a, Map.of("userId", b.id(), "game", "rubik", "mode", "3x3")))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("TARGET_OFFLINE"));
        presence.connected(b.id(), "s2-" + b.id());
        mvc.perform(postJson("/api/v1/challenges/invites", a, Map.of("userId", b.id(), "game", "chess", "mode", "x")))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.code").value("INVALID_GAME"));

        UUID id = inviteAndAccept(a, b, "rubik", "3x3");
        JsonNode m = match(id, a);
        assertThat(m.get("status").asString()).isEqualTo("WAITING_READY");
        assertThat(m.get("source").asString()).isEqualTo("INVITE");
        String scramble = m.get("config").get("scramble").asString();
        // Hai người nhận cùng một đề.
        assertThat(match(id, b).get("config").get("scramble").asString()).isEqualTo(scramble);
        mvc.perform(as(get("/api/v1/matches/active"), b)).andExpect(jsonPath("$.id").value(id.toString()));
        // Người ngoài không xem được phòng; đang trong trận thì không nhận lời mời khác.
        mvc.perform(as(get("/api/v1/matches/" + id), stranger)).andExpect(status().isForbidden());
        mvc.perform(postJson("/api/v1/challenges/invites", b, Map.of("userId", a.id(), "game", "caro", "mode", "15x15")))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("PLAYER_BUSY"));

        // Chưa bắt đầu thì không nộp được.
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", a, Map.of("solution", inverse(scramble))))
                .andExpect(status().isConflict());
        readyAndStart(id, a, b);

        mvc.perform(postJson("/api/v1/matches/" + id + "/progress", b, Map.of("progress", 40)))
                .andExpect(status().isAccepted());
        clock.advance(Duration.ofSeconds(8));
        // Lời giải sai → server từ chối, trận vẫn tiếp tục.
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", b, Map.of("solution", "R U R'")))
                .andExpect(status().isUnprocessableContent()).andExpect(jsonPath("$.code").value("RESULT_REJECTED"));
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", a, Map.of("solution", inverse(scramble))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("FINISHED"))
                .andExpect(jsonPath("$.endReason").value("SOLVED"))
                .andExpect(jsonPath("$.winnerId").value(a.id().toString()))
                .andExpect(jsonPath("$.rated").value(true))
                .andExpect(jsonPath("$.players[0].timeMs").value(9000));
        // Người còn lại nộp sau khi trận đã xong → không đổi kết quả.
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", b, Map.of("solution", inverse(scramble))))
                .andExpect(status().isConflict());
        assertThat(ratings.find(a.id(), "rubik").orElseThrow().getRating()).isEqualTo(1216);
        assertThat(ratings.find(b.id(), "rubik").orElseThrow().getRating()).isEqualTo(1184);
        mvc.perform(as(get("/api/v1/matches/active"), a)).andExpect(status().isNoContent());
        mvc.perform(as(get("/api/v1/matches/me"), a)).andExpect(jsonPath("$[0].id").value(id.toString()));
        mvc.perform(get("/api/v1/leaderboards/online").param("game", "rubik")).andExpect(status().isOk());
    }

    @Test
    void assistedWinIsNotRated() throws Exception {
        Account a = register("asa");
        Account b = register("asb");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "rubik", "3x3");
        String scramble = match(id, a).get("config").get("scramble").asString();
        readyAndStart(id, a, b);
        mvc.perform(as(post("/api/v1/matches/" + id + "/assist"), a))
                .andExpect(jsonPath("$.players[0].assisted").value(true));
        clock.advance(Duration.ofSeconds(5));
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", a, Map.of("solution", inverse(scramble))))
                .andExpect(jsonPath("$.winnerId").value(a.id().toString()))
                .andExpect(jsonPath("$.rated").value(false));
        assertThat(ratings.find(a.id(), "rubik")).isEmpty();
    }

    // ------------------------------------------------------------------ Sudoku + Xếp hình

    @Test
    void sudokuAndPuzzleUseSameServerConfig() throws Exception {
        Account a = register("sua");
        Account b = register("sub");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "sudoku", "easy");
        String puzzle = match(id, a).get("config").get("puzzle").asString();
        assertThat(match(id, b).get("config").get("puzzle").asString()).isEqualTo(puzzle);
        readyAndStart(id, a, b);
        clock.advance(Duration.ofSeconds(90));
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", b,
                Map.of("grid", MatchVerifierTest.solveSudoku(puzzle))))
                .andExpect(jsonPath("$.winnerId").value(b.id().toString()));

        UUID pz = inviteAndAccept(b, a, "puzzle", "3x3");
        JsonNode cfg = match(pz, a).get("config");
        assertThat(cfg.get("seed").asInt()).isEqualTo(match(pz, b).get("config").get("seed").asInt());
        assertThat(cfg.get("image").asString()).isNotBlank();
        readyAndStart(pz, a, b);
        clock.advance(Duration.ofSeconds(20));
        List<Map<String, Object>> drops = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            drops.add(Map.of("piece", i, "atMs", 1500L * (i + 1), "hint", false));
        }
        mvc.perform(postJson("/api/v1/matches/" + pz + "/finish", a, Map.of("drops", drops.subList(0, 5))))
                .andExpect(status().isUnprocessableContent());
        mvc.perform(postJson("/api/v1/matches/" + pz + "/finish", a, Map.of("drops", drops)))
                .andExpect(jsonPath("$.status").value("FINISHED"))
                .andExpect(jsonPath("$.winnerId").value(a.id().toString()));
    }

    // ------------------------------------------------------------------ Caro

    @Test
    void caroIsTurnBasedAndJudgedByServer() throws Exception {
        Account a = register("caa");
        Account b = register("cab");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "caro", "15x15");
        readyAndStart(id, a, b);
        UUID xId = UUID.fromString(match(id, a).get("config").get("x").asString());
        Account x = xId.equals(a.id()) ? a : b;
        Account o = x == a ? b : a;
        String url = "/api/v1/matches/" + id + "/caro/move";
        mvc.perform(postJson(url, o, Map.of("cell", 0, "index", 0)))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("NOT_YOUR_TURN"));
        int[] xs = {0, 1, 2, 3, 4};
        int[] os = {100, 101, 102, 103};
        int index = 0;
        for (int k = 0; k < 4; k++) {
            mvc.perform(postJson(url, x, Map.of("cell", xs[k], "index", index++))).andExpect(status().isOk());
            if (k == 0) {
                mvc.perform(postJson(url, o, Map.of("cell", 0, "index", index)))
                        .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("CELL_TAKEN"));
                mvc.perform(postJson(url, o, Map.of("cell", 50, "index", 0)))
                        .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("STALE_MOVE"));
            }
            mvc.perform(postJson(url, o, Map.of("cell", os[k], "index", index++))).andExpect(status().isOk());
        }
        mvc.perform(postJson(url, x, Map.of("cell", 4, "index", index)))
                .andExpect(jsonPath("$.status").value("FINISHED"))
                .andExpect(jsonPath("$.endReason").value("CARO_WIN"))
                .andExpect(jsonPath("$.winnerId").value(x.id().toString()))
                .andExpect(jsonPath("$.caroMoves", hasSize(9)));
    }

    @Test
    void caroTurnTimeoutLosesTheGame() throws Exception {
        Account a = register("cta");
        Account b = register("ctb");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "caro", "15x15");
        readyAndStart(id, a, b);
        UUID xId = UUID.fromString(match(id, a).get("config").get("x").asString());
        clock.advance(Duration.ofSeconds(31));
        matches.tick();
        JsonNode m = match(id, a);
        assertThat(m.get("endReason").asString()).isEqualTo("TIMEOUT");
        assertThat(m.get("winnerId").asString()).isNotEqualTo(xId.toString());
    }

    // ------------------------------------------------------------------ hẹn giờ / rời phòng

    @Test
    void readyTimeoutForfeitAndDisconnect() throws Exception {
        Account a = register("tma");
        Account b = register("tmb");
        befriend(a, b);
        UUID wait = inviteAndAccept(a, b, "rubik", "3x3");
        clock.advance(Duration.ofSeconds(61));
        matches.tick();
        assertThat(match(wait, a).get("status").asString()).isEqualTo("CANCELLED");
        assertThat(match(wait, a).get("endReason").asString()).isEqualTo("READY_TIMEOUT");

        UUID ff = inviteAndAccept(a, b, "rubik", "3x3");
        readyAndStart(ff, a, b);
        mvc.perform(as(post("/api/v1/matches/" + ff + "/forfeit"), b))
                .andExpect(jsonPath("$.endReason").value("FORFEIT"))
                .andExpect(jsonPath("$.winnerId").value(a.id().toString()));

        UUID dc = inviteAndAccept(a, b, "rubik", "3x3");
        readyAndStart(dc, a, b);
        presence.disconnected(b.id(), "s-" + b.id());
        clock.advance(Duration.ofSeconds(20));
        matches.tick();
        assertThat(match(dc, a).get("status").asString()).isEqualTo("PLAYING"); // còn trong ân hạn
        presence.connected(b.id(), "s3-" + b.id()); // kết nối lại kịp
        presence.disconnected(b.id(), "s3-" + b.id());
        clock.advance(Duration.ofSeconds(46));
        matches.tick();
        JsonNode m = match(dc, a);
        assertThat(m.get("endReason").asString()).isEqualTo("DISCONNECT");
        assertThat(m.get("winnerId").asString()).isEqualTo(a.id().toString());
    }

    // ------------------------------------------------------------------ chat trong phòng

    @Test
    void matchChatIsPrivateFilteredAndIdempotent() throws Exception {
        Account a = register("mca");
        Account b = register("mcb");
        Account c = register("mcc");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "rubik", "3x3");
        String url = "/api/v1/matches/" + id + "/messages";
        JsonNode sent = body(mvc.perform(postJson(url, a, Map.of("text", "Chúc may mắn vcl", "clientId", "c-1")))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.text").value("Chúc may mắn ***")).andReturn());
        mvc.perform(postJson(url, a, Map.of("text", "Chúc may mắn vcl", "clientId", "c-1")))
                .andExpect(jsonPath("$.id").value(sent.get("id").asLong()));
        mvc.perform(postJson(url, c, Map.of("text", "Xin chào", "clientId", "c-2"))).andExpect(status().isForbidden());
        mvc.perform(postJson(url, b, Map.of("text", "x".repeat(301), "clientId", "c-3")))
                .andExpect(status().isBadRequest());
        mvc.perform(as(get(url), b)).andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].senderId").value(a.id().toString()));
        mvc.perform(postJson("/api/v1/matches/" + id + "/report", b,
                Map.of("messageId", sent.get("id").asLong(), "reason", "Nói tục"))).andExpect(status().isCreated());
        // Không báo cáo được tin của chính mình.
        mvc.perform(postJson("/api/v1/matches/" + id + "/report", a,
                Map.of("messageId", sent.get("id").asLong(), "reason", "Thử"))).andExpect(status().isBadRequest());
    }

    // ------------------------------------------------------------------ ghép trận theo vùng

    @Test
    void matchmakingUsesCoarseRegionsAndOptInWidening() throws Exception {
        Account hn1 = register("mh1");
        Account hn2 = register("mh2");
        Account sg = register("msg");
        String q = "/api/v1/matchmaking/queue";
        mvc.perform(postJson(q, hn1, Map.of("game", "sudoku", "mode", "hard", "region", "21.0285,105.8542",
                "widen", false))).andExpect(status().isBadRequest()).andExpect(jsonPath("$.code").value("INVALID_REGION"));
        mvc.perform(as(get("/api/v1/matchmaking/regions"), hn1)).andExpect(status().isOk());

        // Khác vùng, không bật mở rộng → không ghép dù chờ lâu.
        mvc.perform(postJson(q, hn1, Map.of("game", "sudoku", "mode", "hard", "region", "VN-HN", "widen", false)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.region").value("VN-HN"));
        mvc.perform(postJson(q, sg, Map.of("game", "sudoku", "mode", "hard", "region", "VN-HCM", "widen", true)))
                .andExpect(status().isOk());
        clock.advance(Duration.ofSeconds(50));
        matchmaking.tick();
        mvc.perform(as(get("/api/v1/matches/active"), hn1)).andExpect(status().isNoContent());

        // Cùng vùng → ghép ngay, cùng đề.
        mvc.perform(postJson(q, hn2, Map.of("game", "sudoku", "mode", "hard", "region", "VN-HN", "widen", false)))
                .andExpect(status().isOk());
        matchmaking.tick();
        JsonNode m1 = body(mvc.perform(as(get("/api/v1/matches/active"), hn1)).andExpect(status().isOk()).andReturn());
        JsonNode m2 = body(mvc.perform(as(get("/api/v1/matches/active"), hn2)).andExpect(status().isOk()).andReturn());
        assertThat(m1.get("id").asString()).isEqualTo(m2.get("id").asString());
        assertThat(m1.get("source").asString()).isEqualTo("MATCHMAKING");
        // Phản hồi không bao giờ chứa toạ độ / khoảng cách.
        assertThat(m1.toString()).doesNotContain("lat").doesNotContain("distance");
        mvc.perform(as(get(q), sg)).andExpect(status().isOk());
        mvc.perform(as(delete(q), sg)).andExpect(status().isNoContent());
        mvc.perform(as(get(q), sg)).andExpect(status().isNoContent());
    }
}
