package com.gamehub.server.match;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends JpaRepository<Match, UUID> {

    @Query("select count(m) > 0 from Match m where m.id = :id and (m.playerA = :user or m.playerB = :user)")
    boolean isParticipant(@Param("id") UUID id, @Param("user") UUID user);

    @Query("select m from Match m where (m.playerA = :user or m.playerB = :user) and m.status in :statuses")
    List<Match> findForUser(@Param("user") UUID user, @Param("statuses") Collection<Match.Status> statuses);

    List<Match> findByStatusIn(Collection<Match.Status> statuses);

    @Query("select m from Match m where m.playerA = :user or m.playerB = :user order by m.createdAt desc")
    List<Match> history(@Param("user") UUID user, Pageable page);
}
