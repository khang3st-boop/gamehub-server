package com.gamehub.server.leaderboard;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamehub.server.match.MatchConfigFactory;
import com.gamehub.server.match.UserRating;
import com.gamehub.server.match.UserRatingRepository;
import com.gamehub.server.result.ResultDtos.LeaderboardEntry;
import com.gamehub.server.result.ResultService;
import com.gamehub.server.user.User;
import com.gamehub.server.user.UserDtos.UserSummaryDto;
import com.gamehub.server.user.UserRepository;
import com.gamehub.server.common.ApiException;

@RestController
@RequestMapping("/api/v1/leaderboards")
@Tag(name = "Bảng xếp hạng", description = "Bảng xếp hạng chơi đơn (kết quả đã xác minh) và xếp hạng online (Elo)")
public class LeaderboardController {

    public record OnlineEntry(int rank, UserSummaryDto user, int rating, int played, int wins) {
    }

    private final ResultService results;
    private final UserRatingRepository ratings;
    private final UserRepository users;

    public LeaderboardController(ResultService results, UserRatingRepository ratings, UserRepository users) {
        this.results = results;
        this.ratings = ratings;
        this.users = users;
    }

    @GetMapping
    @Operation(summary = "Bảng xếp hạng chơi đơn (giống /api/v1/leaderboard)")
    public List<LeaderboardEntry> solo(@RequestParam("game") String game,
            @RequestParam(name = "period", defaultValue = "all") String period,
            @RequestParam(name = "limit", defaultValue = "50") int limit) {
        return results.leaderboard(game, period, limit);
    }

    @GetMapping("/online")
    @Operation(summary = "Xếp hạng online theo Elo (chỉ trận không dùng gợi ý / tự giải)")
    @Transactional(readOnly = true)
    public List<OnlineEntry> online(@RequestParam("game") String game,
            @RequestParam(name = "limit", defaultValue = "50") int limit) {
        if (!MatchConfigFactory.MODES.containsKey(game)) {
            throw ApiException.badRequest("INVALID_GAME", "Game phải là rubik, sudoku, puzzle hoặc caro");
        }
        List<UserRating> top = ratings.top(game, PageRequest.of(0, Math.clamp(limit, 1, 100)));
        Map<UUID, User> byId = users.findAllById(top.stream().map(UserRating::getUserId).toList()).stream()
                .collect(Collectors.toMap(User::getId, Function.identity(), (a, b) -> a, HashMap::new));
        int rank = 0;
        List<OnlineEntry> out = new java.util.ArrayList<>();
        for (UserRating r : top) {
            User u = byId.get(r.getUserId());
            if (u != null) {
                out.add(new OnlineEntry(++rank, UserSummaryDto.of(u), r.getRating(), r.getPlayed(), r.getWins()));
            }
        }
        return out;
    }
}
