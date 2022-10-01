package com.ssafy.theground.repository;

import com.ssafy.theground.entity.MatchSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchSettingRepository extends JpaRepository<MatchSetting, Long> {
    MatchSetting findMatchSettingByMatchSeq(Long matchSeq);
}
