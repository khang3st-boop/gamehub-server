package com.gamehub.server.match;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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
    void assistInRatedChallengeDisqualifiesOnServer() throws Exception {
        Account a = register("asa");
        Account b = register("asb");
        befriend(a, b);
        UUID id = inviteAndAccept(a, b, "rubik", "3x3");
        JsonNode cfg = match(id, a).get("config");
        assertThat(cfg.get("assistLocked").asBoolean()).isTrue();
        String scramble = cfg.get("scramble").asString();
        readyAndStart(id, a, b);
        // Trận thách đấu khoá trợ giúp: client cố gọi trợ giúp → server xử thua, không chỉ ẩn nút.
        mvc.perform(as(post("/api/v1/matches/" + id + "/assist"), a))
                .andExpect(jsonPath("$.status").value("FINISHED"))
                .andExpect(jsonPath("$.endReason").value("DISQUALIFIED"))
                .andExpect(jsonPath("$.winnerId").value(b.id().toString()))
                .andExpect(jsonPath("$.assistLocked").value(true));
        clock.advance(Duration.ofSeconds(5));
        mvc.perform(postJson("/api/v1/matches/" + id + "/finish", a, Map.of("solution", inverse(scramble))))
                .andExpect(status().isConflict());
        // Nộp kết quả có cờ "đã dùng trợ giúp" cũng bị xử thua.
        UUID id2 = inviteAndAccept(a, b, "rubik", "3x3");
        String scramble2 = match(id2, a).get("config").get("scramble").asString();
        readyAndStart(id2, a, b);
        clock.advance(Duration.ofSeconds(5));
        mvc.perform(postJson("/api/v1/matches/" + id2 + "/finish", a,
                Map.of("solution", inverse(scramble2), "assisted", true)))
                .andExpect(jsonPath("$.endReason").value("DISQUALIFIED"))
                .andExpect(jsonPath("$.winnerId").value(b.id().toString()));
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

    // ------------------------------------------------------------------ phòng chờ 2/4 người

    JsonNode createRoom(Account host, String game, String mode, int capacity) throws Exception {
        return body(mvc.perform(postJson("/api/v1/rooms", host,
                Map.of("game", game, "mode", mode, "capacity", capacity))).andExpect(status().isCreated()).andReturn());
    }

    JsonNode joinCode(Account a, String code) throws Exception {
        return body(mvc.perform(postJson("/api/v1/rooms/join", a, Map.of("code", code)))
                .andExpect(status().isOk()).andReturn());
    }

    void readyAll(UUID id, Account... ps) throws Exception {
        for (Account p : ps) {
            mvc.perform(as(post("/api/v1/matches/" + id + "/ready"), p)).andExpect(status().isOk());
        }
    }

    @Test
    void fourPlayerRubikRoomRaceRanksByServerTime() throws Exception {
        Account a = register("r4a");
        Account b = register("r4b");
        Account c = register("r4c");
        Account d = register("r4d");
        Account e = register("r4e");
        JsonNode room = createRoom(a, "rubik", "3x3", 4);
        assertThat(room.get("capacity").asInt()).isEqualTo(4);
        assertThat(room.get("source").asString()).isEqualTo("ROOM");
        assertThat(room.get("players").size()).isEqualTo(1);
        String code = room.get("roomCode").asString();
        assertThat(code).hasSize(6);
        UUID id = UUID.fromString(room.get("id").asString());
        // Chủ phòng không thể tạo phòng thứ hai khi đang ngồi phòng này.
        mvc.perform(postJson("/api/v1/rooms", a, Map.of("game", "rubik", "mode", "3x3", "capacity", 2)))
                .andExpect(status().isConflict());
        mvc.perform(postJson("/api/v1/rooms/join", b, Map.of("code", "ZZZZZZ"))).andExpect(status().isNotFound());
        joinCode(b, code);
        assertThat(joinCode(b, code).get("players").size()).isEqualTo(2); // vào lại: không nhân đôi ghế
        joinCode(c, code);
        JsonNode full = joinCode(d, code);
        assertThat(full.get("players").size()).isEqualTo(4);
        assertThat(full.get("players").get(3).get("slot").asString()).isEqualTo("D");
        mvc.perform(postJson("/api/v1/rooms/join", e, Map.of("code", code)))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("ROOM_FULL"));

        // Đề chỉ sinh khi đủ người và tất cả Sẵn sàng.
        readyAll(id, a, b, c);
        JsonNode waiting = match(id, a);
        assertThat(waiting.get("status").asString()).isEqualTo("WAITING_READY");
        readyAll(id, d);
        JsonNode cd = match(id, c);
        assertThat(cd.get("status").asString()).isEqualTo("COUNTDOWN");
        String scramble = cd.get("config").get("scramble").asString();
        assertThat(match(id, d).get("config").get("scramble").asString()).isEqualTo(scramble);
        clock.advance(Duration.ofSeconds(4));
        matches.tick();

        clock.advance(Duration.ofSeconds(10));
        finishRubik(id, c, scramble).andExpect(jsonPath("$.status").value("PLAYING"));
        clock.advance(Duration.ofSeconds(2));
        finishRubik(id, a, scramble);
        clock.advance(Duration.ofSeconds(2));
        // B bỏ cuộc giữa chừng → bị loại, những người còn lại vẫn đua tiếp.
        mvc.perform(as(post("/api/v1/matches/" + id + "/forfeit"), b))
                .andExpect(jsonPath("$.status").value("PLAYING"));
        clock.advance(Duration.ofSeconds(3));
        JsonNode end = body(finishRubik(id, d, scramble)
                .andExpect(jsonPath("$.status").value("FINISHED"))
                .andExpect(jsonPath("$.winnerId").value(c.id().toString()))
                .andExpect(jsonPath("$.rated").value(true)).andReturn());
        Map<String, Integer> rank = new java.util.HashMap<>();
        end.get("players").forEach(p -> rank.put(p.get("user").get("id").asString(), p.get("rank").asInt()));
        assertThat(rank.get(c.id().toString())).isEqualTo(1);
        assertThat(rank.get(a.id().toString())).isEqualTo(2);
        assertThat(rank.get(d.id().toString())).isEqualTo(3);
        assertThat(rank.get(b.id().toString())).isEqualTo(4);
        assertThat(ratings.find(c.id(), "rubik").orElseThrow().getRating()).isGreaterThan(1200);
        assertThat(ratings.find(b.id(), "rubik").orElseThrow().getRating()).isLessThan(1200);
        mvc.perform(as(get("/api/v1/matches/active"), a)).andExpect(status().isNoContent());
    }

    org.springframework.test.web.servlet.ResultActions finishRubik(UUID id, Account p, String scramble) throws Exception {
        return mvc.perform(postJson("/api/v1/matches/" + id + "/finish", p, Map.of("solution", inverse(scramble))))
                .andExpect(status().isOk());
    }

    @Test
    void guestLeavingWaitingRoomFreesSeatAndHostCanInviteIntoRoom() throws Exception {
        Account host = register("rgh");
        Account g = register("rgg");
        Account f = register("rgf");
        befriend(host, f);
        JsonNode room = createRoom(host, "sudoku", "easy", 2);
        UUID id = UUID.fromString(room.get("id").asString());
        joinCode(g, room.get("roomCode").asString());
        mvc.perform(as(post("/api/v1/matches/" + id + "/ready"), g)).andExpect(status().isOk());
        // Khách rời phòng chờ: chỉ nhả ghế, phòng vẫn mở cho chủ phòng.
        mvc.perform(as(post("/api/v1/matches/" + id + "/forfeit"), g)).andExpect(status().isOk());
        JsonNode after = match(id, host);
        assertThat(after.get("status").asString()).isEqualTo("WAITING_READY");
        assertThat(after.get("players").size()).isEqualTo(1);
        mvc.perform(as(get("/api/v1/matches/active"), g)).andExpect(status().isNoContent());

        // Mời bạn vào đúng phòng chờ; nhận lời → vào ghế trống, không tạo phòng mới.
        JsonNode inv = body(mvc.perform(postJson("/api/v1/challenges/invites", host,
                Map.of("userId", f.id(), "game", "rubik", "mode", "3x3", "roomId", id)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.roomId").value(id.toString()))
                .andExpect(jsonPath("$.game").value("sudoku"))
                .andExpect(jsonPath("$.capacity").value(2)).andReturn());
        mvc.perform(as(post("/api/v1/challenges/invites/" + inv.get("id").asString() + "/accept"), f))
                .andExpect(jsonPath("$.matchId").value(id.toString()));
        // Bấm nhận lần hai không tạo phòng thứ hai.
        mvc.perform(as(post("/api/v1/challenges/invites/" + inv.get("id").asString() + "/accept"), f))
                .andExpect(status().is4xxClientError());
        assertThat(match(id, f).get("players").size()).isEqualTo(2);
        // Phòng đủ người thì không mời thêm được.
        mvc.perform(postJson("/api/v1/challenges/invites", host,
                Map.of("userId", g.id(), "game", "sudoku", "mode", "easy", "roomId", id)))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("ROOM_FULL"));
        // Chủ phòng rời → đóng phòng.
        mvc.perform(as(post("/api/v1/matches/" + id + "/forfeit"), host)).andExpect(status().isOk());
        assertThat(match(id, f).get("status").asString()).isEqualTo("CANCELLED");
        mvc.perform(postJson("/api/v1/rooms/join", g, Map.of("code", room.get("roomCode").asString())))
                .andExpect(status().is4xxClientError());
    }

    @Test
    void fourPlayerCaroIsSemifinalsThenFinal() throws Exception {
        Account[] ps = { register("cba"), register("cbb"), register("cbc"), register("cbd") };
        JsonNode room = createRoom(ps[0], "caro", "15x15", 4);
        UUID parent = UUID.fromString(room.get("id").asString());
        for (int i = 1; i < 4; i++) {
            joinCode(ps[i], room.get("roomCode").asString());
        }
        readyAll(parent, ps);
        JsonNode p = match(parent, ps[0]);
        assertThat(p.get("bracket").size()).isEqualTo(2);
        // Mỗi người được đưa vào đúng ván bán kết của mình.
        UUID semi = UUID.fromString(body(mvc.perform(as(get("/api/v1/matches/active"), ps[1]))
                .andExpect(status().isOk()).andReturn()).get("id").asString());
        assertThat(semi).isNotEqualTo(parent);
        assertThat(match(semi, ps[1]).get("stage").asString()).startsWith("SEMI");
        // Nước đi gửi vào phòng mẹ bị từ chối.
        mvc.perform(postJson("/api/v1/matches/" + parent + "/caro/move", ps[0], Map.of("cell", 0, "index", 0)))
                .andExpect(status().is4xxClientError());

        clock.advance(Duration.ofSeconds(4));
        matches.tick();
        // Không ai đi trong bán kết → X hết giờ, O đi tiếp.
        clock.advance(Duration.ofSeconds(31));
        matches.tick();
        matches.tick();
        p = match(parent, ps[0]);
        assertThat(p.get("bracket").size()).isEqualTo(3);
        clock.advance(Duration.ofSeconds(6));
        matches.tick();
        clock.advance(Duration.ofSeconds(31));
        matches.tick();
        matches.tick();
        p = match(parent, ps[0]);
        assertThat(p.get("status").asString()).isEqualTo("FINISHED");
        List<Integer> ranks = new ArrayList<>();
        p.get("players").forEach(x -> ranks.add(x.get("rank").asInt()));
        assertThat(ranks).containsExactlyInAnyOrder(1, 2, 3, 3);
        assertThat(p.get("winnerId").asString()).isNotBlank();
        for (Account a : ps) {
            mvc.perform(as(get("/api/v1/matches/active"), a)).andExpect(status().isNoContent());
        }
    }

    // ------------------------------------------------------------------ sảnh thách đấu + chống spam

    @Test
    void lobbyOptInAllowsStrangerInvitesWithoutLocation() throws Exception {
        Account a = register("lba");
        Account b = register("lbb");
        Account blocked = register("lbx");
        String lobby = "/api/v1/lobby";
        mvc.perform(as(get(lobby + "/me"), b)).andExpect(status().isNoContent());
        mvc.perform(as(put(lobby), b).contentType(MediaType.APPLICATION_JSON).content(json(Map.of(
                "games", List.of("sudoku"), "capacities", List.of(2, 4), "region", "21.0,105.8", "showStats", true))))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.code").value("INVALID_REGION"));
        mvc.perform(as(put(lobby), b).contentType(MediaType.APPLICATION_JSON).content(json(Map.of(
                "games", List.of("sudoku"), "capacities", List.of(2, 4), "region", "VN-HCM", "showStats", false))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.region.code").value("VN-HCM"));
        mvc.perform(as(put(lobby), blocked).contentType(MediaType.APPLICATION_JSON).content(json(Map.of(
                "games", List.of("sudoku"), "region", "VN-HN", "showStats", true)))).andExpect(status().isOk());
        mvc.perform(as(post("/api/v1/users/" + blocked.id() + "/block"), a)).andExpect(status().isNoContent());

        JsonNode list = body(mvc.perform(as(get(lobby).param("game", "sudoku"), a)).andExpect(status().isOk()).andReturn());
        List<String> ids = new ArrayList<>();
        list.forEach(x -> ids.add(x.get("user").get("id").asString()));
        assertThat(ids).contains(b.id().toString()).doesNotContain(blocked.id().toString(), a.id().toString());
        assertThat(list.toString()).doesNotContain("lat").doesNotContain("distance").doesNotContain("address");
        mvc.perform(as(get(lobby).param("game", "sudoku").param("region", "VN-HN"), a))
                .andExpect(jsonPath("$[?(@.user.id == '" + b.id() + "')]", hasSize(0)));
        mvc.perform(as(get(lobby).param("game", "caro"), a))
                .andExpect(jsonPath("$[?(@.user.id == '" + b.id() + "')]", hasSize(0)));

        // Không phải bạn bè nhưng B đã cho phép mời đấu sudoku → mời được; game khác thì không.
        mvc.perform(postJson("/api/v1/challenges/invites", a, Map.of("userId", b.id(), "game", "caro", "mode", "15x15")))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("FRIENDS_ONLY"));
        JsonNode inv = body(mvc.perform(postJson("/api/v1/challenges/invites", a,
                Map.of("userId", b.id(), "game", "sudoku", "mode", "easy"))).andExpect(status().isCreated()).andReturn());
        // B mời ngược lại cùng lúc → được nhắc nhận lời mời có sẵn, không tạo hai phòng.
        mvc.perform(postJson("/api/v1/challenges/invites", b, Map.of("userId", a.id(), "game", "sudoku", "mode", "easy")))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("INCOMING_INVITE_EXISTS"));
        // B từ chối → A không mời lại ngay được.
        mvc.perform(as(post("/api/v1/challenges/invites/" + inv.get("id").asString() + "/decline"), b))
                .andExpect(jsonPath("$.status").value("DECLINED"));
        mvc.perform(as(get("/api/v1/matches/active"), a)).andExpect(status().isNoContent());
        mvc.perform(postJson("/api/v1/challenges/invites", a, Map.of("userId", b.id(), "game", "sudoku", "mode", "easy")))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("INVITE_COOLDOWN"));
        clock.advance(Duration.ofMinutes(3));
        mvc.perform(as(put(lobby), b).contentType(MediaType.APPLICATION_JSON).content(json(Map.of(
                "games", List.of("sudoku"), "region", "VN-HCM", "showStats", false)))).andExpect(status().isOk());
        JsonNode inv2 = body(mvc.perform(postJson("/api/v1/challenges/invites", a,
                Map.of("userId", b.id(), "game", "sudoku", "mode", "easy"))).andExpect(status().isCreated()).andReturn());
        // Hết hạn lời mời → không nhận được nữa, không có phòng.
        clock.advance(Duration.ofSeconds(61));
        mvc.perform(as(post("/api/v1/challenges/invites/" + inv2.get("id").asString() + "/accept"), b))
                .andExpect(status().is4xxClientError());
        mvc.perform(as(get("/api/v1/matches/active"), b)).andExpect(status().isNoContent());

        // Tắt "Cho phép mời đấu" → biến khỏi danh sách.
        mvc.perform(as(delete(lobby), b)).andExpect(status().isNoContent());
        mvc.perform(as(get(lobby).param("game", "sudoku"), a))
                .andExpect(jsonPath("$[?(@.user.id == '" + b.id() + "')]", hasSize(0)));

        // Báo cáo người chơi.
        mvc.perform(postJson("/api/v1/users/" + b.id() + "/report", a, Map.of("reason", "Spam lời mời")))
                .andExpect(status().isCreated());
        mvc.perform(postJson("/api/v1/users/" + a.id() + "/report", a, Map.of("reason", "x")))
                .andExpect(status().isBadRequest());
    }
}
