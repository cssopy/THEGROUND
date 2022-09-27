package com.ssafy.theground.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long>{
	Optional<Result> findByMatchSeq(Long seq);
}
