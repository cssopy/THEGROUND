package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.MatchResDto;
import com.ssafy.theground.entity.Season;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.repository.AITeamRepository;
import com.ssafy.theground.repository.ScheduleRepository;
import com.ssafy.theground.repository.SeasonRepository;
import com.ssafy.theground.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MainService {

    private final UserRepository userRepository;

    private final SeasonRepository seasonRepository;

    private final ScheduleRepository scheduleRepository;

    private final AITeamRepository aiTeamRepository;
    private final JwtService jwtService;

//    public List<MatchResDto> getSchedules() throws Exception {
//        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
//
//        if(byUserUid.isPresent()){
//            Season byUserSeq = seasonRepository.findByUserSeq(byUserUid.get().getUserSeq());
//        }
//
//    }
}
