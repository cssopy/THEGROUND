package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.*;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GameService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final MatchRepository matchRepository;
    private final LogoRepository logoRepository;
    private final TeamSettingRepository teamSettingRepository;
    private final ManagePitcherRepository managePitcherRepository;
    private final ManageHitterRepository manageHitterRepository;
    private final PitcherRepository pitcherRepository;
    private final HitterRepository hitterRepository;
    private final AITeamRepository aiTeamRepository;
    private final AISettingRepository aiSettingRepository;
    private final LogRepository logRepository;
    private final MatchSettingRepository matchSettingRepository;
    private final ScoreboardRepository scoreboardRepository;

    @Transactional
    public Map<String, BriefInfoResDto> teamBriefInfo() throws Exception {
        Map<String, BriefInfoResDto> map = new HashMap<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        if (byUserUid.isPresent()) {
            List<Match> ByUserSeq = matchRepository.findByUserSeq(byUserUid.get());
            Match match = ByUserSeq.get(0);
            boolean matchHomeFlag = match.getMatchHomeFlag();
            BriefInfoResDto homeTeam = new BriefInfoResDto();
            BriefInfoResDto awayTeam = new BriefInfoResDto();

            // 유저가 Home
            if (matchHomeFlag == true) {
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

    public Map<String, Object> battingSimulate(String uid) {
        long matchSeq = matchRepository.findTop1ByUserSeq_UserUid(uid).getMatchSeq();
        Log log = logRepository.findByMatchSeq(matchSeq);
        MatchSetting setting = matchSettingRepository.findByMatchSeq(matchSeq).get();
        Scoreboard scoreboard = scoreboardRepository.findByMatchSeq(matchSeq);

        long pitcherSeq = log.getLogPitcher();
        long hitterSeq = log.getLogHitter();
        int out = log.getLogOut();
        Long log1stBase = log.getLog1stBase();
        Long log2ndBase = log.getLog2ndBase();
        Long log3rdBase = log.getLog3rdBase();

        int inning;
        String half;
        String event;
        boolean isEnd = false;
        LinkedList<PitchResDto> pitches = new LinkedList<>();

        /*
        while (!isEnd) {
            PitchResDto pitch = new PitchResDto();
            // 타석 끝까지 투구 시뮬레이션 반복하면서 경기 현황 갱신
            // 각 코드 들어옴
            // 타석이 끝나면 isEnd를 True로 갱신
            pitches.add(pitch);
        }
         */

        /* 테스트 코드 들어갈 자리, 아래는 while문 대신 임시로 입력함 */
        inning = 1;
        half = "Top";
        /* 테스트 코드 끝 */


        // 다음 타자로 넘기고, 경기 진행 및 설정에 타자 갱신
        int nextBat = setting.getMatchSettingNextBat();
        nextBat = (nextBat + 1) % 9;
        switch (nextBat) {
            case 1:
                hitterSeq = setting.getMatchSetting1st().getHitterSeq();
                break;
            case 2:
                hitterSeq = setting.getMatchSetting2nd().getHitterSeq();
                break;
            case 3:
                hitterSeq = setting.getMatchSetting3rd().getHitterSeq();
                break;
            case 4:
                hitterSeq = setting.getMatchSetting4th().getHitterSeq();
                break;
            case 5:
                hitterSeq = setting.getMatchSetting5th().getHitterSeq();
                break;
            case 6:
                hitterSeq = setting.getMatchSetting6th().getHitterSeq();
                break;
            case 7:
                hitterSeq = setting.getMatchSetting7th().getHitterSeq();
                break;
            case 8:
                hitterSeq = setting.getMatchSetting8th().getHitterSeq();
                break;
            case 0:
                hitterSeq = setting.getMatchSetting9th().getHitterSeq();
                break;
        }
        setting.setMatchSettingNextBat(nextBat);
        log.setLogHitter(hitterSeq);
        matchSettingRepository.save(setting);
        logRepository.save(log);

        // 반환값 만들기
        Map<String, Object> resultMap = new HashMap<>();
        String pitcherName = pitcherRepository.findByPitcherSeq(pitcherSeq).getPitcherName();
        String hitterName = hitterRepository.findByHitterSeq(hitterSeq).getHitterName();

        resultMap.put("inning", inning);
        resultMap.put("half", half);
        resultMap.put("out", out);
        resultMap.put("pitches", pitches);
        resultMap.put("pitcherName", pitcherName);
        resultMap.put("pitcherSeq", pitcherSeq);
        resultMap.put("hitterName", hitterName);
        resultMap.put("hitterSeq", hitterSeq);
        if (log1stBase != null) {
            resultMap.put("1stBaseSeq", log1stBase);
            resultMap.put("1stBaseName", hitterRepository.findByHitterSeq(log1stBase));
        }
        if (log2ndBase != null) {
            resultMap.put("2ndBaseSeq", log2ndBase);
            resultMap.put("2ndBaseName", hitterRepository.findByHitterSeq(log2ndBase));
        }
        if (log3rdBase != null) {
            resultMap.put("3rdBaseSeq", log3rdBase);
            resultMap.put("3rdBaseName", hitterRepository.findByHitterSeq(log3rdBase));
        }
        resultMap.put("scoreboard", scoreboard);

        return resultMap;
    }

    @Transactional
    public Map<String, List<?>> changePlayer() throws Exception {
        Map<String, List<?>> map = new HashMap<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if(byUserUid.isPresent()){
            List<ChangePitcherResDto> pitcherList = new ArrayList<>();
            List<ChangeHitterResDto> hitterList = new ArrayList<>();

            List<UserPitcher> userPitcher = managePitcherRepository.findAllByUserSeq(byUserUid.get());
            List<UserHitter> userHitter = manageHitterRepository.findAllByUserSeq(byUserUid.get());

            for(UserPitcher u : userPitcher){
                Pitcher byPitcherSeq = pitcherRepository.findByPitcherSeq(u.getPitcherSeq());
                ChangePitcherResDto changePitcherResDto = new ChangePitcherResDto();
                changePitcherResDto.setPitcherSeq(u.getPitcherSeq());
                changePitcherResDto.setName(u.getUserPitcherName());
                changePitcherResDto.setPitArm(byPitcherSeq.getPitArm());
                changePitcherResDto.setEra(byPitcherSeq.getEra());
                pitcherList.add(changePitcherResDto);
            }
            map.put("pitcher", pitcherList);

            for(UserHitter u : userHitter) {
                Hitter byHitterSeq = hitterRepository.findByHitterSeq(u.getHitterSeq());
                ChangeHitterResDto changeHitterResDto = new ChangeHitterResDto();
                changeHitterResDto.setHitterSeq(u.getHitterSeq());
                changeHitterResDto.setName(u.getUserHitterName());
                changeHitterResDto.setBatArm(byHitterSeq.getBatArm());
                changeHitterResDto.setAvg(byHitterSeq.getAvg());
                hitterList.add(changeHitterResDto);
            }
            map.put("hitter", hitterList);
            return map;
        }
        else return null;
    }
    
    public LineupResDto getLineup(String uid,Long matchSeq) {
    	LineupResDto l = new LineupResDto();
    	Optional<Match> o = matchRepository.findByMatchSeq(matchSeq);
    	//match가 존재한다면
    	if(o.isPresent()) {
    		User u = userRepository.findByUserUid(uid).get();
    		Match m = o.get();
    		AITeam aiteam = aiTeamRepository.findByAiTeamSeq(m.getAiTeamSeq());
    		AISetting aisetting = aiSettingRepository.findByAiTeamSeq(aiteam.getAiTeamSeq()).get();
    		MatchSetting matchSetting = matchSettingRepository.findByMatchSeq(m.getMatchSeq()).get();
    		
    		OrderResDto aiorder = new OrderResDto();
    		OrderResDto order = new OrderResDto();
    		aiorder.setTeamLogoUrl(aiteam.getLogoSeq().getLogoUrl());
    		aiorder.setTeamName(aiteam.getAiTeamName());
    		aiorder.setHitter1st(aisetting.getAiSetting1st());
    		aiorder.setHitter2nd(aisetting.getAiSetting2nd());
    		aiorder.setHitter3rd(aisetting.getAiSetting3rd());
    		aiorder.setHitter4th(aisetting.getAiSetting4th());
    		aiorder.setHitter5th(aisetting.getAiSetting5th());
    		aiorder.setHitter6th(aisetting.getAiSetting6th());
    		aiorder.setHitter7th(aisetting.getAiSetting7th());
    		aiorder.setHitter8th(aisetting.getAiSetting8th());
    		aiorder.setHitter9th(aisetting.getAiSetting9th());
    		switch(aisetting.getAiSettingPitcher()) {
    		case 5:
    			aiorder.setPitcher(aisetting.getAiSettingsp5());
    			break;
    		case 4:
    			aiorder.setPitcher(aisetting.getAiSettingsp4());
    			break;
    		case 3:
    			aiorder.setPitcher(aisetting.getAiSettingsp3());
    			break;
    		case 2:
    			aiorder.setPitcher(aisetting.getAiSettingsp2());
    			break;
    		case 1:
    		default:
    			aiorder.setPitcher(aisetting.getAiSettingsp1());
    			break;
    		}
    		
    		order.setTeamLogoUrl(u.getLogo().getLogoUrl());
    		order.setTeamName(u.getUserTeamname());
    		order.setHitter1st(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting1st().getHitterSeq()));
    		order.setHitter2nd(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting2nd().getHitterSeq()));
    		order.setHitter3rd(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting3rd().getHitterSeq()));
    		order.setHitter4th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting4th().getHitterSeq()));
    		order.setHitter5th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting5th().getHitterSeq()));
    		order.setHitter6th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting6th().getHitterSeq()));
    		order.setHitter7th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting7th().getHitterSeq()));
    		order.setHitter8th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting8th().getHitterSeq()));
    		order.setHitter9th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting9th().getHitterSeq()));
    		order.setPitcher(pitcherRepository.findByPitcherSeq(matchSetting.getMatchSettingPitcher().getPitcherSeq()));
    	
    		if(m.getMatchHomeFlag()) {
    			l.setHome(order);
    			l.setAway(aiorder);
    		}else {
    			l.setHome(aiorder);
    			l.setAway(order);
    		}
    	}
    	return l;
    	
    }
}
