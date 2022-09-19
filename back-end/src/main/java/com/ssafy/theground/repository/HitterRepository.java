package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Hitter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HitterRepository extends JpaRepository<Hitter, Long> {
}
