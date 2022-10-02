package com.ssafy.theground.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.MatchSetting;

@Repository
public interface MatchSettingRepository extends JpaRepository<MatchSetting, Long>{
	Optional<MatchSetting> findByMatchSeq(Long seq);
}
