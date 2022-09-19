package com.ssafy.theground.repository;

import com.ssafy.theground.entity.UserHitter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManageHitterRepository extends JpaRepository<UserHitter, Long> {

}
