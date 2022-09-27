package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.MatchResDto;
import com.ssafy.theground.entity.AITeam;
import com.ssafy.theground.entity.Schedule;
import com.ssafy.theground.entity.Season;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MainService {

    private final UserRepository userRepository;

    private final SeasonRepository seasonRepository;

    private final ScheduleRepository scheduleRepository;

    private final AITeamRepository aiTeamRepository;

    private final LogoRepository logoRepository;

    private final JwtService jwtService;

    public List<MatchResDto> getSchedules() throws Exception {
        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        List<MatchResDto> list = new ArrayList<>();

        if(byUserUid.isPresent()){
            Season byUserSeq = seasonRepository.findByUserSeq(byUserUid.get());
            List<Schedule> byScheduleSeq = scheduleRepository.findByScheduleSeq(byUserSeq.getScheduleSeq());
            for(Schedule schedule : byScheduleSeq){
                MatchResDto matchResDto = new MatchResDto();
                AITeam byAiTeamSeq = aiTeamRepository.findByAiTeamSeq(schedule.getTeamSeq().getAiTeamSeq());

                matchResDto.setTeamName(byAiTeamSeq.getAiTeamName());
                matchResDto.setLogoUrl(logoRepository.findByLogoSeq(byAiTeamSeq.getLogoSeq().getLogoSeq()).getLogoUrl());

                list.add(matchResDto);
            }
            return list;
        }
        else return null;
    }
}
