package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Hitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HitterRepository extends JpaRepository<Hitter, Long> {
    List<Hitter> findAllByHitterSeqNotIn(List<Long> hitterSeq);
}
