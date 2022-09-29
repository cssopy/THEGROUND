package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.HitterResDto;
import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.dto.res.RotationResDto;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ManageService {

    private final ManagePitcherRepository managePitcherRepository;

    private final ManageHitterRepository manageHitterRepository;

    private final PitcherRepository pitcherRepository;

    private final HitterRepository hitterRepository;

    private final JwtService jwtService;

    private final UserRepository userRepository;
    
    private final TeamSettingRepository teamSettingRepository;
    
    private final UserPitcherRepository userPitcherRepository;

    // 투수 목록 상세 조회
    public List<PitcherResDto> pitcherList() throws Exception {
        List<PitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        TeamSetting teamSetting = byUserUid.get().getTeamSetting();

        if(byUserUid.isPresent()) {
            List<UserPitcher> allByUser = managePitcherRepository.findAllByUserSeq(byUserUid.get());
            for (UserPitcher onePitcher : allByUser) {
                if(onePitcher.getPitcherSeq() == teamSetting.getTeamSetting1stSp().getPitcherSeq() ||
                onePitcher.getPitcherSeq() == teamSetting.getTeamSetting2ndSp().getPitcherSeq() ||
                onePitcher.getPitcherSeq() == teamSetting.getTeamSetting3rdSp().getPitcherSeq() ||
                onePitcher.getPitcherSeq() == teamSetting.getTeamSetting4thSp().getPitcherSeq() ||
                onePitcher.getPitcherSeq() == teamSetting.getTeamSetting5thSp().getPitcherSeq()){
                    continue;
                }
                Optional<Pitcher> byId = pitcherRepository.findById(onePitcher.getPitcherSeq());
                if(byId.isPresent()) {
                    PitcherResDto pitcherResDto = new PitcherResDto();
                    pitcherResDto.setPitcherSeq(byId.get().getPitcherSeq());
                    pitcherResDto.setPitcherName(byId.get().getPitcherName());
                    pitcherResDto.setPitArm(byId.get().getPitArm());
                    pitcherResDto.setEra(byId.get().getEra());
                    pitcherResDto.setGame(byId.get().getGame());
                    pitcherResDto.setInning(byId.get().getInning());
                    pitcherResDto.setWin(byId.get().getWin());
                    pitcherResDto.setLose(byId.get().getLose());

                    list.add(pitcherResDto);
                }
                else return null;
            }
        } else return null;

        return list;
    }

    public List<HitterResDto> hitterList() throws Exception {
        List<HitterResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if(byUserUid.isPresent()) {
            List<UserHitter> allHitters = manageHitterRepository.findAllByUserSeq(byUserUid.get());
            for (UserHitter oneHitter : allHitters) {
                Optional<Hitter> byId = hitterRepository.findById(oneHitter.getHitterSeq());
                if(byId.isPresent()) {
                    HitterResDto hitterResDto = new HitterResDto();
                    hitterResDto.setHitterSeq(byId.get().getHitterSeq());
                    hitterResDto.setHitterName(byId.get().getHitterName());
                    hitterResDto.setBatArm(byId.get().getBatArm());
                    hitterResDto.setAvg(byId.get().getAvg());
                    hitterResDto.setGame(byId.get().getGame());
                    hitterResDto.setAtBat(byId.get().getAtBat());
                    hitterResDto.setObp(byId.get().getObp());
                    hitterResDto.setSlg(byId.get().getSlg());
                    hitterResDto.setHomerun(byId.get().getHomerun());

                    list.add(hitterResDto);
                } else return null;
            }
        } else return null;

        return list;
    }
    
    public RotationResDto rotationList(String uid){
    	User u = userRepository.findByUserUid(uid).get();
    	TeamSetting t = teamSettingRepository.findByUserSeq_UserSeq(u.getUserSeq());
    	RotationResDto result = new RotationResDto();
    	result.setTeamSetting1stSp(pitcherRepository.findByPitcherSeq(t.getTeamSetting1stSp().getPitcherSeq()));
    	result.setTeamSetting2ndSp(pitcherRepository.findByPitcherSeq(t.getTeamSetting2ndSp().getPitcherSeq()));
    	result.setTeamSetting3rdSp(pitcherRepository.findByPitcherSeq(t.getTeamSetting3rdSp().getPitcherSeq()));
    	result.setTeamSetting4thSp(pitcherRepository.findByPitcherSeq(t.getTeamSetting4thSp().getPitcherSeq()));
    	result.setTeamSetting5thSp(pitcherRepository.findByPitcherSeq(t.getTeamSetting5thSp().getPitcherSeq()));
    	result.setTeamSettingNextSp(t.getTeamSettingNextSp());
    	return result;
    }
    
    public void rotationUpdate(String uid, Long[] list) throws Exception {
    	Optional<UserPitcher> o;
    	User u = userRepository.findByUserUid(uid).get();
    	TeamSetting t = teamSettingRepository.findByUserSeq_UserSeq(u.getUserSeq());
    	Long userSeq = userRepository.findByUserUid(uid).get().getUserSeq();
    	for(int i=0;i<5;i++) {
    		o = userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(userSeq, list[i]);
    		if(o.isPresent()) {
    			if(i==0) {
    				t.setTeamSetting1stSp(o.get());
    			}else if(i==1) {
    				t.setTeamSetting2ndSp(o.get());
    			}else if(i==2) {
    				t.setTeamSetting3rdSp(o.get());
    			}else if(i==3) {
    				t.setTeamSetting4thSp(o.get());
    			}else if(i==4) {
    				t.setTeamSetting5thSp(o.get());
    			}
    		}else {
    			throw new Exception("에러 발생");
    		}
    	}
    	teamSettingRepository.save(t);
    }
}
