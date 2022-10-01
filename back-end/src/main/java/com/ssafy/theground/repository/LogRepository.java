package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {
    Log findByMatchSeq(Long MatchSeq);
}
