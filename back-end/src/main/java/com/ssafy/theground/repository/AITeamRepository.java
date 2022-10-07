package com.ssafy.theground.repository;

import com.ssafy.theground.entity.AITeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AITeamRepository extends JpaRepository<AITeam, Long> {

    AITeam findByAiTeamSeq(Long aiTeamSeq);
}
