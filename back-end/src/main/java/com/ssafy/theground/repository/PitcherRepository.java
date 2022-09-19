package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Pitcher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PitcherRepository extends JpaRepository<Pitcher, Long> {
    List<Pitcher> findAllByIdNotIn(List<Long> pitcherSeq);
}
