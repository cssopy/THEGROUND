package com.ssafy.theground.repository;

import com.ssafy.theground.dto.req.TradeSaveReqDto;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserPitcher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManagePitcherRepository extends JpaRepository<UserPitcher, Long> {

    boolean existsByPitcherSeq(Long pitcherSeq);

    List<UserPitcher> findByUserSeq(User userSeq);

    List<UserPitcher> findAllByUserSeq(User user);

    void deleteByUserSeq(User user);
}
