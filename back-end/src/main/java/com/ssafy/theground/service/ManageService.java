package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.HitterResDto;
import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.repository.ManageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ManageService {

    private final ManageRepository manageRepository;

    // 투수 목록 상세 조회
    public PitcherResDto aa(){
        Pitcher pitcher = new Pitcher();
        PitcherResDto pitcherResDto = new PitcherResDto();

        pitcherResDto.setPitcherSeq(pitcher.getPitcherSeq());
        pitcherResDto.setPitcherName(pitcher.getPitcherName());
        pitcherResDto.setArm(pitcher.getPitArm());
        pitcherResDto.setEra(pitcher.getEra());
        pitcherResDto.setGame(pitcher.getGame());
        pitcherResDto.setInning(pitcher.getInning());
        pitcherResDto.setWin(pitcher.getWin());
        pitcherResDto.setLose(pitcher.getLose());

        return pitcherResDto;
    }

    public HitterResDto bb(){
        Hitter hitter = new Hitter();
        HitterResDto hitterResDto = new HitterResDto();

        hitterResDto.setHitterSeq(hitter.getHitterSeq());
        hitterResDto.setHitterName(hitter.getHitterName());
        hitterResDto.setBatArm(hitter.getBatArm());
        hitterResDto.setAvg(hitter.getAvg());
        hitterResDto.setGame(hitter.getGame());
        hitterResDto.setAtBat(hitter.getAtBat());
        hitterResDto.setObp(hitter.getObp());
        hitterResDto.setSlg(hitter.getSlg());
        hitterResDto.setHomerun(hitter.getHomerun());

        return hitterResDto;
    }
}
