package com.ssafy.theground.service;

import com.ssafy.theground.entity.Match;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.repository.MatchRepository;
import com.ssafy.theground.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GameService {

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final MatchRepository matchRepository;

    public void teamBriefInfo() throws Exception {
        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        if(byUserUid.isPresent()){
            List<Match> top3ByUserSeq = matchRepository.findTop3ByUserSeq(byUserUid.get().getUserSeq());

        }
    }
}
