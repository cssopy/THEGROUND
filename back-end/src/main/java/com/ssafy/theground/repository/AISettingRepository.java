package com.ssafy.theground.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.AISetting;

@Repository
public interface AISettingRepository extends JpaRepository<AISetting, Long>{
	Optional<AISetting> findByAiTeamSeq(Long aiTeamSeq);
}
