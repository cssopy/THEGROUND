package com.ssafy.theground.repository;

import com.ssafy.theground.entity.Description;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DescriptionRepository extends JpaRepository<Description, Long> {
    Description findByMatchSeq(Long matchSeq);
}
