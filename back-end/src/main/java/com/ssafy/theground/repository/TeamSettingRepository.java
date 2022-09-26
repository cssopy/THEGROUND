package com.ssafy.theground.repository;

import com.ssafy.theground.entity.TeamSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamSettingRepository extends JpaRepository<TeamSetting, Long> {

    TeamSetting findByUserSeq(Long userSeq);
}
