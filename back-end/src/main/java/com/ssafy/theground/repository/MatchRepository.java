package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Match;
import com.ssafy.theground.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> findTop3ByUserSeq(Long userSeq);
    List<Match> findByUserSeq_UserUidOrderByMatchSeqDesc(String userUid);
    List<Match> findByUserSeq(User userSeq);
    Match findTop1ByUserSeq_UserUid(String userUid);
}
