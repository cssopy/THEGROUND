package com.ssafy.theground.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.AITeam;

@Repository
public interface AITeamRepository extends JpaRepository<AITeam, Long>{

}
