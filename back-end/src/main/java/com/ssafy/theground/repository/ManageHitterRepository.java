package com.ssafy.theground.repository;

import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserHitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManageHitterRepository extends JpaRepository<UserHitter, Long> {
    List<UserHitter> findAllByUserSeq(User userSeq);

    boolean existsByHitterSeq(Long hitterSeq);

    List<Long> findHitterSeqByUserSeq(Long userSeq);
}
