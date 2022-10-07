package com.ssafy.theground.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.theground.entity.Logo;
import org.springframework.stereotype.Repository;


@Repository
public interface LogoRepository extends JpaRepository<Logo, Long>{
    Logo findByLogoSeq(Long logoSeq);
}
