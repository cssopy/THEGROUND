package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.UserHitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HitterRepository extends JpaRepository<Hitter, Long> {

    Hitter findByHitterSeq(Long hitterSeq);

    List<Hitter> findAllByHitterSeqNotIn(List<UserHitter> hitterSeq);
}
