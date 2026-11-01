package com.gamehub.server.result;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GameResultRepository extends JpaRepository<GameResultEntity, UUID> {

    Optional<GameResultEntity> findByUserIdAndClientId(UUID userId, String clientId);

    @Query("""
            select r from GameResultEntity r
            where r.userId = :user and r.receivedAt >= :since
            order by r.receivedAt asc, r.id asc
            """)
    List<GameResultEntity> changedSince(@Param("user") UUID user, @Param("since") Instant since, Pageable page);

    @Query("""
            select r from GameResultEntity r
            where r.userId = :user and (:game is null or r.game = :game)
            order by r.playedAt desc
            """)
    List<GameResultEntity> history(@Param("user") UUID user, @Param("game") String game, Pageable page);

    /** Một dòng bảng xếp hạng: userId, điểm cao nhất, số ván, thời gian thắng nhanh nhất. */
    interface BoardRow {
        UUID getUserId();

        Integer getBestScore();

        Long getGamesPlayed();

        Long getBestTimeMs();
    }

    @Query("""
            select r.userId as userId, max(r.score) as bestScore, count(r) as gamesPlayed,
                   min(case when r.outcome = 'win' then r.durationMs end) as bestTimeMs
            from GameResultEntity r
            where r.game = :game and r.rankable = true and r.playedAt >= :from
            group by r.userId
            order by max(r.score) desc, min(case when r.outcome = 'win' then r.durationMs end) asc, r.userId asc
            """)
    List<BoardRow> leaderboard(@Param("game") String game, @Param("from") Instant from, Pageable page);

    /** Bảng xếp hạng của một ngày thử thách (chỉ kết quả đã được xếp hạng ngày). */
    @Query("""
            select r.userId as userId, max(r.score) as bestScore, count(r) as gamesPlayed,
                   min(case when r.outcome = 'win' then r.durationMs end) as bestTimeMs
            from GameResultEntity r
            where r.game = :game and r.rankable = true and r.dailyDate = :date
            group by r.userId
            order by max(r.score) desc, min(case when r.outcome = 'win' then r.durationMs end) asc, r.userId asc
            """)
    List<BoardRow> dailyLeaderboard(@Param("game") String game, @Param("date") String date, Pageable page);

    @Query("""
            select r from GameResultEntity r
            where r.userId = :user and r.dailyDate >= :from
            order by r.dailyDate desc, r.playedAt desc
            """)
    List<GameResultEntity> dailyOf(@Param("user") UUID user, @Param("from") String from, Pageable page);
}
