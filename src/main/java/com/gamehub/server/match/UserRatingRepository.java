package com.gamehub.server.match;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRatingRepository extends JpaRepository<UserRating, UserRating.Key> {

    default Optional<UserRating> find(UUID user, String game) {
        return findById(new UserRating.Key(user, game));
    }

    @Query("select r from UserRating r where r.game = :game and r.played > 0 order by r.rating desc, r.wins desc")
    List<UserRating> top(@Param("game") String game, Pageable page);
}
