package com.ssafy.theground.repository;

import com.ssafy.theground.entity.UserPitcher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManagePitcherRepository extends JpaRepository<UserPitcher, Long> {
    List<UserPitcher> findAllByUserSeq(Long userSeq);

    List<Long> findPitcherSeqByUserSeq(Long userSeq);
}
