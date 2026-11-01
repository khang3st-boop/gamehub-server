package com.gamehub.server.match;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MatchMessageRepository extends JpaRepository<MatchMessage, Long> {

    Optional<MatchMessage> findBySenderIdAndClientId(UUID senderId, String clientId);

    @Query("select m from MatchMessage m where m.matchId = :match and m.id > :after order by m.id")
    List<MatchMessage> after(@Param("match") UUID match, @Param("after") long after, Pageable page);
}
