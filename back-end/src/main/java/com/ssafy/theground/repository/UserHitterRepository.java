package com.ssafy.theground.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.UserHitter;
import com.ssafy.theground.entity.UserPitcher;

@Repository
public interface UserHitterRepository extends JpaRepository<UserHitter, Long>{
	Optional<UserHitter> findByUserSeq_UserSeqAndHitterSeq(Long userSeq, Long hitterSeq);
}
