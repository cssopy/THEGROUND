package com.ssafy.theground.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.UserPitcher;

@Repository
public interface UserPitcherRepository extends JpaRepository<UserPitcher, Long>{
	UserPitcher findByUserPitcherSeq(Long userPitcherSeq);
	Optional<UserPitcher> findByUserSeq_UserSeqAndPitcherSeq(Long userSeq, Long pitcherSeq);
}
