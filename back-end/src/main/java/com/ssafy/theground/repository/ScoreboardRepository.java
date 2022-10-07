package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Scoreboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreboardRepository extends JpaRepository<Scoreboard, Long> {
    Scoreboard findByMatchSeq(long matchSeq);
}
