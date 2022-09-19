package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Hitter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HitterRepository extends JpaRepository<Hitter, Long> {
    List<Hitter> findAllByIdNotIn(List<Long> hitterSeq);
}
