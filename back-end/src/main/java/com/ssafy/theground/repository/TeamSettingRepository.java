package com.ssafy.theground.repository;

import com.ssafy.theground.entity.TeamSetting;
import com.ssafy.theground.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamSettingRepository extends JpaRepository<TeamSetting, Long> {

    TeamSetting findByUserSeq_UserSeq(Long seq);

    void deleteByUserSeq(User user);
    
}
