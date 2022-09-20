package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Pitcher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PitcherRepository extends JpaRepository<Pitcher, Long> {
    List<Pitcher> findAllByPitcherSeqNotIn(List<Long> pitcherSeq);
}
