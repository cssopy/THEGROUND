package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> findByUserSeq(Long userSeq);
}
