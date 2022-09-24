package com.ssafy.theground.repository;

import com.ssafy.theground.entity.AITeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AITeamRepository extends JpaRepository<AITeam, Long> {

//    @Query(value = "SELECT a FROM AITeam AS a, Schedule AS sc WHERE a.teamSeq = (SELECT sc.teamSeq FROM Schedule AS sc, Season AS s WHERE sc.matchSeq = (SELECT s.matchSeq FROM Season AS s, User AS u WHERE s.userSeq = :userSeq))")
//    List<AITeam> selectAll(@Param("userSeq") Long userSeq);
}
