package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.BriefInfoResDto;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
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

    private final LogoRepository logoRepository;
    private final TeamSettingRepository teamSettingRepository;

    private final PitcherRepository pitcherRepository;

    private final AITeamRepository aiTeamRepository;

    public Map<String, BriefInfoResDto> teamBriefInfo() throws Exception {
        Map<String, BriefInfoResDto> map = new HashMap<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        if(byUserUid.isPresent()){
            List<Match> ByUserSeq = matchRepository.findByUserSeq(byUserUid.get());
            Match match = ByUserSeq.get(0);
            boolean matchHomeFlag = match.getMatchHomeFlag();
            BriefInfoResDto homeTeam = new BriefInfoResDto();
            BriefInfoResDto awayTeam = new BriefInfoResDto();

            // 유저가 Home
            if(matchHomeFlag == true){
                homeTeam.setTeamName(byUserUid.get().getUserTeamname());
                homeTeam.setTeamLogoUrl(byUserUid.get().getLogo().getLogoUrl());
                homeTeam.setTeamWin(byUserUid.get().getUserWin());
                homeTeam.setTeamLose(byUserUid.get().getUserLose());
                homeTeam.setTeamDraw(byUserUid.get().getUserDraw());
                TeamSetting byUserSeq = teamSettingRepository.findByUserSeq_UserSeq(byUserUid.get().getUserSeq());
                homeTeam.setStartingPitcher(pitcherRepository.findByPitcherSeq(byUserSeq.getTeamSettingNextSp().longValue()).getPitcherName());
                map.put("home", homeTeam);

                List<Match> byUserSeq1 = matchRepository.findByUserSeq(byUserUid.get());
                AITeam byAITeamSeq = aiTeamRepository.findByAiTeamSeq(byUserSeq1.get(0).getAiTeamSeq());
                awayTeam.setTeamName(byAITeamSeq.getAiTeamName());
                String logoUrl = logoRepository.findByLogoSeq(byAITeamSeq.getLogoSeq().getLogoSeq()).getLogoUrl();
                awayTeam.setTeamLogoUrl(logoUrl);
                map.put("away", awayTeam);
            }
            // 유저가 Away
            else {
                awayTeam.setTeamName(byUserUid.get().getUserTeamname());
                awayTeam.setTeamLogoUrl(byUserUid.get().getLogo().getLogoUrl());
                awayTeam.setTeamWin(byUserUid.get().getUserWin());
                awayTeam.setTeamLose(byUserUid.get().getUserLose());
                awayTeam.setTeamDraw(byUserUid.get().getUserDraw());
                TeamSetting byUserSeq = teamSettingRepository.findByUserSeq_UserSeq(byUserUid.get().getUserSeq());
                awayTeam.setStartingPitcher(pitcherRepository.findByPitcherSeq(byUserSeq.getTeamSettingNextSp().longValue()).getPitcherName());
                map.put("away", awayTeam);

                List<Match> byUserSeq1 = matchRepository.findByUserSeq(byUserUid.get());
                AITeam byAITeamSeq = aiTeamRepository.findByAiTeamSeq(byUserSeq1.get(0).getAiTeamSeq());
                homeTeam.setTeamName(byAITeamSeq.getAiTeamName());
                String logoUrl = logoRepository.findByLogoSeq(byAITeamSeq.getLogoSeq().getLogoSeq()).getLogoUrl();
                homeTeam.setTeamLogoUrl(logoUrl);
                map.put("home", homeTeam);
            }

            return map;
        }
        else return null;
    }
}
