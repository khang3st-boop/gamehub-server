package com.gamehub.server;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import com.gamehub.server.daily.DailyRandom;
import com.gamehub.server.game.rubik.CubieCube.Move;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserRepository;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

/** Kiểm thử tích hợp toàn bộ API trên H2 (chế độ PostgreSQL) với Flyway + Spring Security thật. */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class ApiIntegrationTest {

    @Autowired
    MockMvc mvc;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    UserRepository users;

    record Account(String id, String username, String access, String refresh) {
    }

    // ----------------------------------------------------------------- helpers

    String json(Object o) {
        return mapper.writeValueAsString(o);
    }

    JsonNode body(MvcResult r) throws Exception {
        return mapper.readTree(r.getResponse().getContentAsString());
    }

    static String uniqueName(String prefix) {
        return prefix + "_" + Long.toString(ThreadLocalRandom.current().nextLong(1L << 40), 36);
    }

    /** Mỗi lần đăng ký dùng IP ngẫu nhiên để không chạm giới hạn đăng ký theo IP giữa các test. */
    static MockHttpServletRequestBuilder fromRandomIp(MockHttpServletRequestBuilder b) {
        String ip = "10." + ThreadLocalRandom.current().nextInt(256) + "." + ThreadLocalRandom.current().nextInt(256)
                + "." + ThreadLocalRandom.current().nextInt(1, 255);
        return b.with(req -> {
            req.setRemoteAddr(ip);
            return req;
        });
    }

    Account register(String prefix) throws Exception {
        String username = uniqueName(prefix);
        MvcResult r = mvc.perform(fromRandomIp(post("/api/v1/auth/register"))
                .contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("username", username, "displayName", "Người " + prefix,
                        "password", "matkhau123"))))
                .andExpect(status().isCreated())
                .andReturn();
        JsonNode j = body(r);
        return new Account(j.get("user").get("id").asString(), username, j.get("accessToken").asString(),
                j.get("refreshToken").asString());
    }

    /** A gửi lời mời kết bạn, B chấp nhận. */
    void befriend(Account a, Account b) throws Exception {
        mvc.perform(auth(post("/api/v1/friends/requests"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("userId", b.id())))).andExpect(status().is2xxSuccessful());
        mvc.perform(auth(post("/api/v1/friends/requests/" + a.id() + "/accept"), b))
                .andExpect(status().is2xxSuccessful());
    }

    static MockHttpServletRequestBuilder auth(MockHttpServletRequestBuilder b, Account a) {
        return b.header("Authorization", "Bearer " + a.access());
    }

    static String inverse(String scramble) {
        List<Move> moves = new ArrayList<>(Move.parseSequence(scramble));
        Collections.reverse(moves);
        return Move.format(moves.stream().map(m -> new Move(m.face(), 4 - m.turns())).toList());
    }

    static Map<String, Object> rubikResult(String clientId, String scramble, boolean autoSolve) {
        String solution = inverse(scramble);
        int n = Move.parseSequence(solution).size();
        Map<String, Object> details = new LinkedHashMap<>();
        details.put("scramble", scramble);
        details.put("solution", solution);
        details.put("autoSolve", autoSolve);
        details.put("assistMoves", autoSolve ? n : 0);
        Map<String, Object> r = new LinkedHashMap<>();
        r.put("clientId", clientId);
        r.put("game", "rubik");
        r.put("mode", "scramble");
        r.put("outcome", "win");
        r.put("score", 999_999); // điểm client tự khai — server phải bỏ qua
        r.put("durationMs", 60_000);
        r.put("moves", n);
        r.put("errors", 0);
        r.put("hints", 0);
        r.put("assisted", autoSolve);
        r.put("playedAt", Instant.now().minusSeconds(30).toString());
        r.put("details", details);
        return r;
    }

    // ------------------------------------------------------------ công khai

    @Test
    void healthAndSwaggerArePublic() throws Exception {
        mvc.perform(get("/api/v1/health")).andExpect(status().isOk()).andExpect(jsonPath("$.status").value("UP"));
        mvc.perform(get("/v3/api-docs")).andExpect(status().isOk())
                .andExpect(jsonPath("$.openapi").exists())
                .andExpect(jsonPath("$.paths['/api/v1/sync']").exists())
                .andExpect(jsonPath("$.paths['/api/v1/challenges/{id}/submit']").exists());
    }

    @Test
    void protectedEndpointsReturnJson401() throws Exception {
        mvc.perform(get("/api/v1/users/me")).andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").exists());
        mvc.perform(get("/api/v1/users/me").header("Authorization", "Bearer not-a-token"))
                .andExpect(status().isUnauthorized());
    }

    // ------------------------------------------------------------------ auth

    @Test
    void registerHashesPasswordAndRejectsDuplicateOrWeak() throws Exception {
        Account a = register("hash");
        User u = users.findById(UUID.fromString(a.id())).orElseThrow();
        assertThat(u.getPasswordHash()).startsWith("{bcrypt}").doesNotContain("matkhau123");

        mvc.perform(fromRandomIp(post("/api/v1/auth/register")).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("username", a.username().toUpperCase(), "displayName", "Trùng",
                        "password", "matkhau123"))))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("USERNAME_TAKEN"));
        mvc.perform(fromRandomIp(post("/api/v1/auth/register")).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("username", uniqueName("weak"), "displayName", "Yếu", "password", "12345678"))))
                .andExpect(status().isBadRequest());
    }

    @Test
    void loginRefreshRotationAndReuseDetection() throws Exception {
        Account a = register("rot");
        mvc.perform(post("/api/v1/auth/login").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("username", a.username(), "password", "sai-mat-khau1"))))
                .andExpect(status().isUnauthorized()).andExpect(jsonPath("$.code").value("INVALID_CREDENTIALS"));
        MvcResult login = mvc.perform(post("/api/v1/auth/login").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("username", a.username(), "password", "matkhau123"))))
                .andExpect(status().isOk()).andReturn();
        String r1 = body(login).get("refreshToken").asString();

        MvcResult refreshed = mvc.perform(post("/api/v1/auth/refresh").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("refreshToken", r1)))).andExpect(status().isOk()).andReturn();
        String r2 = body(refreshed).get("refreshToken").asString();
        String access2 = body(refreshed).get("accessToken").asString();
        assertThat(r2).isNotEqualTo(r1);
        mvc.perform(get("/api/v1/users/me").header("Authorization", "Bearer " + access2))
                .andExpect(status().isOk()).andExpect(jsonPath("$.username").value(a.username()));

        // Dùng lại token cũ → thu hồi cả họ token, kể cả r2.
        mvc.perform(post("/api/v1/auth/refresh").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("refreshToken", r1))))
                .andExpect(status().isUnauthorized()).andExpect(jsonPath("$.code").value("REFRESH_TOKEN_REUSED"));
        mvc.perform(post("/api/v1/auth/refresh").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("refreshToken", r2)))).andExpect(status().isUnauthorized());
    }

    @Test
    void logoutRevokesRefreshToken() throws Exception {
        Account a = register("out");
        mvc.perform(post("/api/v1/auth/logout").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("refreshToken", a.refresh())))).andExpect(status().isNoContent());
        mvc.perform(post("/api/v1/auth/refresh").contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("refreshToken", a.refresh())))).andExpect(status().isUnauthorized());
    }

    @Test
    void profileUpdateAndSearch() throws Exception {
        Account a = register("prof");
        mvc.perform(auth(patch("/api/v1/users/me"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("displayName", "Tên Mới", "avatarColor", 5))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.displayName").value("Tên Mới"))
                .andExpect(jsonPath("$.avatarColor").value(5));
        mvc.perform(auth(patch("/api/v1/users/me"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("displayName", "<script>")))).andExpect(status().isBadRequest());
        Account b = register("seek");
        mvc.perform(auth(get("/api/v1/users/search").param("q", a.username()), b))
                .andExpect(status().isOk()).andExpect(jsonPath("$[0].id").value(a.id()))
                .andExpect(jsonPath("$[0].passwordHash").doesNotExist());
    }

    // ------------------------------------------------- kết quả, đồng bộ, BXH

    @Test
    void dailyChallengeIsPublicAndOnlyLiveVerifiedResultsAreRanked() throws Exception {
        MvcResult t = mvc.perform(get("/api/v1/daily/today")).andExpect(status().isOk()).andReturn();
        JsonNode today = body(t);
        String date = today.get("date").asString();
        assertThat(date).isEqualTo(DailyRandom.dayOf(Instant.now()).toString());
        assertThat(today.get("rulesVersion").asString()).isEqualTo("v1");
        assertThat(today.get("challenge").get("date").asString()).isEqualTo(date);
        String scramble = today.get("challenge").get("rubik").get("scramble").asString();

        Account a = register("daily");
        Map<String, Object> live = rubikResult(UUID.randomUUID().toString(), scramble, false);
        live.put("mode", "daily");
        @SuppressWarnings("unchecked")
        Map<String, Object> d = (Map<String, Object>) live.get("details");
        d.put("daily", date);
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(live)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.dailyDate").value(date));

        // Chơi offline 2 giờ trước rồi mới gửi: được lưu nhưng không xếp hạng ngày.
        Map<String, Object> offline = rubikResult(UUID.randomUUID().toString(), scramble, false);
        offline.put("mode", "daily");
        offline.put("playedAt", Instant.now().minusSeconds(7200).toString());
        @SuppressWarnings("unchecked")
        Map<String, Object> d2 = (Map<String, Object>) offline.get("details");
        d2.put("daily", date);
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(offline)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.dailyDate").doesNotExist());

        // Sai đề bị từ chối.
        Map<String, Object> wrong = rubikResult(UUID.randomUUID().toString(), "R U F' D2 L B'", false);
        wrong.put("mode", "daily");
        @SuppressWarnings("unchecked")
        Map<String, Object> d3 = (Map<String, Object>) wrong.get("details");
        d3.put("daily", date);
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(wrong)))
                .andExpect(status().isUnprocessableContent())
                .andExpect(jsonPath("$.message").value(containsString("không khớp")));

        MvcResult board = mvc.perform(get("/api/v1/daily/" + date + "/leaderboard").param("game", "rubik"))
                .andExpect(status().isOk()).andReturn();
        List<String> ids = new ArrayList<>();
        body(board).forEach(e -> ids.add(e.get("userId").asString()));
        assertThat(ids).contains(a.id());
        body(board).forEach(e -> {
            if (e.get("userId").asString().equals(a.id())) {
                assertThat(e.get("gamesPlayed").asLong()).isEqualTo(1);
            }
        });

        mvc.perform(auth(get("/api/v1/daily/me"), a)).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].clientId").value((String) live.get("clientId")))
                .andExpect(jsonPath("$[0].date").value(date));
        mvc.perform(get("/api/v1/daily/me")).andExpect(status().isUnauthorized());
        mvc.perform(get("/api/v1/daily/2026-02-30/leaderboard").param("game", "rubik"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void submitResultIsIdempotentAndScoredByServer() throws Exception {
        Account a = register("res");
        String clientId = UUID.randomUUID().toString();
        Map<String, Object> r = rubikResult(clientId, "R U F' D2 L B'", false);
        MvcResult first = mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(r))).andExpect(status().isOk()).andReturn();
        int score = body(first).get("score").asInt();
        assertThat(score).isEqualTo(5000 - 5 * 60 - 10 * 6).isNotEqualTo(999_999);
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(r)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.score").value(score));
        mvc.perform(auth(get("/api/v1/results/me"), a)).andExpect(jsonPath("$", hasSize(1)));

        Map<String, Object> bad = rubikResult(UUID.randomUUID().toString(), "R U", false);
        @SuppressWarnings("unchecked")
        Map<String, Object> d = (Map<String, Object>) bad.get("details");
        d.put("solution", "U R");
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(bad)))
                .andExpect(status().isUnprocessableContent()).andExpect(jsonPath("$.code").value("RESULT_REJECTED"));
    }

    @Test
    void syncReportsAcceptedDuplicateRejectedAndReturnsOtherDeviceResults() throws Exception {
        Account a = register("sync");
        // "Thiết bị khác" đã gửi một kết quả.
        Map<String, Object> other = rubikResult(UUID.randomUUID().toString(), "F R U", false);
        mvc.perform(auth(post("/api/v1/results"), a).contentType(MediaType.APPLICATION_JSON).content(json(other)))
                .andExpect(status().isOk());

        Map<String, Object> ok = rubikResult(UUID.randomUUID().toString(), "L D B2", false);
        Map<String, Object> bad = rubikResult(UUID.randomUUID().toString(), "L D", false);
        bad.put("moves", 7);
        MvcResult r = mvc.perform(auth(post("/api/v1/sync"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("results", List.of(ok, bad, other)))))
                .andExpect(status().isOk()).andReturn();
        JsonNode j = body(r);
        assertThat(j.get("accepted")).hasSize(1);
        assertThat(j.get("accepted").get(0).asString()).isEqualTo(ok.get("clientId"));
        assertThat(j.get("duplicates").get(0).asString()).isEqualTo(other.get("clientId"));
        assertThat(j.get("rejected").get(0).get("clientId").asString()).isEqualTo(bad.get("clientId"));
        assertThat(j.get("rejected").get(0).get("reason").asString()).isNotBlank();

        // Thiết bị mới (since = null) nhận lại mọi kết quả đã lưu.
        MvcResult fresh = mvc.perform(auth(post("/api/v1/sync"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("results", List.of())))).andExpect(status().isOk()).andReturn();
        assertThat(body(fresh).get("results")).hasSize(2);
        String since = body(fresh).get("serverTime").asString();

        // Gửi lại cả lô (mạng chập chờn) → không tạo bản ghi trùng.
        mvc.perform(auth(post("/api/v1/sync"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("results", List.of(ok), "since", since))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.duplicates", hasSize(1)))
                .andExpect(jsonPath("$.accepted", hasSize(0)));
        mvc.perform(auth(get("/api/v1/results/me"), a)).andExpect(jsonPath("$", hasSize(2)));

        mvc.perform(auth(post("/api/v1/sync"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("results", List.of(), "since", "hôm qua")))).andExpect(status().isBadRequest());
    }

    @Test
    void leaderboardIsPublicAndExcludesAssistedGames() throws Exception {
        Account solo = register("solo");
        Account helped = register("help");
        mvc.perform(auth(post("/api/v1/results"), solo).contentType(MediaType.APPLICATION_JSON)
                .content(json(rubikResult(UUID.randomUUID().toString(), "R2 U2 F2", false))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.rankable").value(true));
        mvc.perform(auth(post("/api/v1/results"), helped).contentType(MediaType.APPLICATION_JSON)
                .content(json(rubikResult(UUID.randomUUID().toString(), "R2 U2 B2", true))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.rankable").value(false));

        MvcResult r = mvc.perform(get("/api/v1/leaderboard").param("game", "rubik").param("period", "week"))
                .andExpect(status().isOk()).andReturn();
        String text = r.getResponse().getContentAsString();
        assertThat(text).contains(solo.id()).doesNotContain(helped.id());
        mvc.perform(get("/api/v1/leaderboard").param("game", "chess")).andExpect(status().isBadRequest());
    }

    @Test
    void shortChallengeIsStoredButNeverRanked() throws Exception {
        Account p = register("short");
        Map<String, Object> win = rubikResult(UUID.randomUUID().toString(), "R U F2 L' D", false);
        win.put("mode", "short15");
        mvc.perform(auth(post("/api/v1/results"), p).contentType(MediaType.APPLICATION_JSON).content(json(win)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.rankable").value(false));

        // Giải xong nhưng 17 nước (> 15): ghi nhận là thua, 0 điểm.
        Map<String, Object> loss = rubikResult(UUID.randomUUID().toString(), "R U F2 L' D", false);
        @SuppressWarnings("unchecked")
        Map<String, Object> d = (Map<String, Object>) loss.get("details");
        d.put("solution", "R R' R R' R R' U U' U U' U U' " + inverse("R U F2 L' D"));
        loss.put("mode", "short15");
        loss.put("outcome", "loss");
        loss.put("moves", 17);
        mvc.perform(auth(post("/api/v1/results"), p).contentType(MediaType.APPLICATION_JSON).content(json(loss)))
                .andExpect(status().isOk()).andExpect(jsonPath("$.rankable").value(false))
                .andExpect(jsonPath("$.score").value(0));

        String board = mvc.perform(get("/api/v1/leaderboard").param("game", "rubik").param("period", "week"))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
        assertThat(board).doesNotContain(p.id());
    }

    // ------------------------------------------------------------- thử thách

    @Test
    void challengeFlowDeterminesWinnerFromVerifiedSolutions() throws Exception {
        Account a = register("cha");
        Account b = register("chb");
        mvc.perform(auth(get("/api/v1/rubik/scramble"), a)).andExpect(status().isOk())
                .andExpect(jsonPath("$.scramble").isString());

        MvcResult created = mvc.perform(auth(post("/api/v1/challenges"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("opponentId", b.id(), "allowAssist", false, "message", "  Chơi không?  "))))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status").value("OPEN"))
                .andExpect(jsonPath("$.message").value("Chơi không?"))
                .andExpect(jsonPath("$.opponent.userId").value(b.id())).andReturn();
        String id = body(created).get("id").asString();
        String scramble = body(created).get("scramble").asString();
        String solution = inverse(scramble);
        int n = Move.parseSequence(solution).size();

        // Người tạo được giải ngay khi chưa ai nhận.
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "ca-1", "durationMs", 80_000, "moves", n, "solution", solution,
                        "assisted", false))))
                .andExpect(status().isOk()).andExpect(jsonPath("$.creator.durationMs").value(80_000));
        // Gửi lại cùng clientId: idempotent; clientId khác: 409.
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "ca-1", "durationMs", 80_000, "moves", n, "solution", solution,
                        "assisted", false)))).andExpect(status().isOk());
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "ca-2", "durationMs", 1_000, "moves", n, "solution", solution,
                        "assisted", false)))).andExpect(status().isConflict());

        // Người ngoài không thấy / không nhận được thử thách đã chỉ định đối thủ.
        Account c = register("chc");
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/accept"), c)).andExpect(status().isNotFound());
        mvc.perform(auth(get("/api/v1/challenges/" + id), c)).andExpect(status().isNotFound());

        // B chưa nhận thì chưa được nộp.
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "cb-1", "durationMs", 50_000, "moves", n, "solution", solution,
                        "assisted", false)))).andExpect(status().isConflict());
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/accept"), b))
                .andExpect(status().isOk()).andExpect(jsonPath("$.status").value("ACCEPTED"));

        // Không cho trợ giúp → bài có trợ giúp bị từ chối; lời giải sai bị từ chối.
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "cb-0", "durationMs", 50_000, "moves", n, "solution", solution,
                        "assisted", true))))
                .andExpect(status().isUnprocessableContent()).andExpect(jsonPath("$.code").value("ASSIST_NOT_ALLOWED"));
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "cb-0", "durationMs", 50_000, "moves", 1, "solution", "R",
                        "assisted", false))))
                .andExpect(status().isUnprocessableContent()).andExpect(jsonPath("$.code").value("SOLUTION_REJECTED"));

        mvc.perform(auth(post("/api/v1/challenges/" + id + "/submit"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("clientId", "cb-1", "durationMs", 50_000, "moves", n, "solution", solution,
                        "assisted", false))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("COMPLETED"))
                .andExpect(jsonPath("$.winnerId").value(b.id()));

        mvc.perform(auth(get("/api/v1/challenges"), a)).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(id)).andExpect(jsonPath("$[0].winnerId").value(b.id()));
    }

    @Test
    void openChallengesAreListedAndBlockedUsersCannotChallenge() throws Exception {
        Account a = register("opa");
        Account b = register("opb");
        MvcResult created = mvc.perform(auth(post("/api/v1/challenges"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("allowAssist", true)))).andExpect(status().isCreated()).andReturn();
        String id = body(created).get("id").asString();
        mvc.perform(auth(get("/api/v1/challenges/open"), b)).andExpect(status().isOk())
                .andExpect(content().string(containsString(id)));
        mvc.perform(auth(get("/api/v1/challenges/open"), a))
                .andExpect(content().string(not(containsString(id))));

        mvc.perform(auth(post("/api/v1/users/" + a.id() + "/block"), b)).andExpect(status().isNoContent());
        mvc.perform(auth(get("/api/v1/challenges/open"), b)).andExpect(content().string(not(containsString(id))));
        mvc.perform(auth(post("/api/v1/challenges"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("opponentId", b.id(), "allowAssist", false))))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("BLOCKED"));
        mvc.perform(auth(post("/api/v1/challenges"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("opponentId", a.id(), "allowAssist", false)))).andExpect(status().isBadRequest());

        // Người tạo huỷ thử thách công khai.
        mvc.perform(auth(post("/api/v1/challenges/" + id + "/decline"), a))
                .andExpect(status().isOk()).andExpect(jsonPath("$.status").value("DECLINED"));
    }

    // ------------------------------------------------------------------ chat

    @Test
    void chatUnreadBlockAndReport() throws Exception {
        Account a = register("cta");
        Account b = register("ctb");
        String path = "/api/v1/chat/conversations/";
        // Người lạ không nhắn được cho nhau: phải kết bạn hai chiều trước.
        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Chào người lạ", "clientId", "m-0"))))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("FRIENDS_ONLY"));
        befriend(a, b);
        MvcResult sent = mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Xin chào!", "clientId", "m-1"))))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.text").value("Xin chào!")).andReturn();
        long msgId = body(sent).get("id").asLong();
        // Gửi lại cùng clientId → không nhân đôi.
        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Xin chào!", "clientId", "m-1"))))
                .andExpect(jsonPath("$.id").value(msgId));

        mvc.perform(auth(get("/api/v1/chat/conversations"), b)).andExpect(status().isOk())
                .andExpect(jsonPath("$[0].userId").value(a.id()))
                .andExpect(jsonPath("$[0].unread").value(1))
                .andExpect(jsonPath("$[0].lastMessage").value("Xin chào!"));
        mvc.perform(auth(get(path + a.id() + "/messages"), b)).andExpect(jsonPath("$", hasSize(1)));
        mvc.perform(auth(get(path + a.id() + "/messages").param("afterId", String.valueOf(msgId)), b))
                .andExpect(jsonPath("$", hasSize(0)));
        mvc.perform(auth(get("/api/v1/chat/conversations"), b)).andExpect(jsonPath("$[0].unread").value(0));

        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "   ", "clientId", "m-2")))).andExpect(status().isBadRequest());

        mvc.perform(auth(post("/api/v1/reports"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("userId", a.id(), "reason", "Spam", "messageId", msgId))))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.status").value("NEW"));
        // Không thể báo cáo tin nhắn mà mình không nhận.
        mvc.perform(auth(post("/api/v1/reports"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("userId", b.id(), "reason", "Spam", "messageId", msgId))))
                .andExpect(status().isBadRequest());

        mvc.perform(auth(post("/api/v1/users/" + a.id() + "/block"), b)).andExpect(status().isNoContent());
        mvc.perform(auth(get("/api/v1/chat/conversations"), b)).andExpect(jsonPath("$[0].blocked").value(true));
        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Còn đó không?", "clientId", "m-3"))))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("BLOCKED"));
        mvc.perform(auth(post(path + a.id() + "/messages"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Chặn rồi", "clientId", "m-4")))).andExpect(status().isForbidden());

        mvc.perform(auth(delete("/api/v1/users/" + a.id() + "/block"), b)).andExpect(status().isNoContent());
        // Chặn đã huỷ kết bạn: bỏ chặn chưa đủ, phải kết bạn lại.
        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Hết chặn", "clientId", "m-5"))))
                .andExpect(status().isForbidden()).andExpect(jsonPath("$.code").value("FRIENDS_ONLY"));
        befriend(b, a);
        mvc.perform(auth(post(path + b.id() + "/messages"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("text", "Hết chặn", "clientId", "m-6")))).andExpect(status().isCreated());
    }

    // ---------------------------------------------------------------- nearby

    @Test
    void nearbyRequiresOptInAndNeverRevealsCoordinates() throws Exception {
        Account a = register("nba");
        Account b = register("nbb");
        Account far = register("nbf");
        mvc.perform(auth(get("/api/v1/nearby/players"), b))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.code").value("PRESENCE_REQUIRED"));

        // Toạ độ ngẫu nhiên ở vùng biển để không trùng dữ liệu test khác.
        double lat = -40 - ThreadLocalRandom.current().nextDouble(5);
        double lon = -120 - ThreadLocalRandom.current().nextDouble(5);
        mvc.perform(auth(put("/api/v1/nearby/presence"), a).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("lat", lat + 0.001234, "lon", lon)))).andExpect(status().isOk())
                .andExpect(jsonPath("$.expiresAt").exists());
        mvc.perform(auth(put("/api/v1/nearby/presence"), b).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("lat", lat + 0.03, "lon", lon)))).andExpect(status().isOk());
        mvc.perform(auth(put("/api/v1/nearby/presence"), far).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("lat", lat + 1.0, "lon", lon)))).andExpect(status().isOk());
        mvc.perform(auth(put("/api/v1/nearby/presence"), far).contentType(MediaType.APPLICATION_JSON)
                .content(json(Map.of("lat", 91, "lon", lon)))).andExpect(status().isBadRequest());

        MvcResult r = mvc.perform(auth(get("/api/v1/nearby/players").param("radiusKm", "10"), b))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].userId").value(a.id()))
                .andExpect(jsonPath("$[0].distance").value("2–5 km"))
                .andReturn();
        String text = r.getResponse().getContentAsString();
        assertThat(text).doesNotContain("lat").doesNotContain("lon").doesNotContain(String.valueOf(lat).substring(0, 6));

        // Tắt chia sẻ → biến mất khỏi danh sách ngay.
        mvc.perform(auth(delete("/api/v1/nearby/presence"), a)).andExpect(status().isNoContent());
        mvc.perform(auth(get("/api/v1/nearby/players").param("radiusKm", "10"), b))
                .andExpect(jsonPath("$", hasSize(0)));

        // Bán kính lớn thấy người ở xa (nhóm 25–50 km không áp dụng vì ~111 km > 50 km tối đa).
        mvc.perform(auth(get("/api/v1/nearby/players").param("radiusKm", "500"), b))
                .andExpect(jsonPath("$", hasSize(0)));
    }
}
