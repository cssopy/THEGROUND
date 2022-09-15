package com.ssafy.theground.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.theground.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
}
