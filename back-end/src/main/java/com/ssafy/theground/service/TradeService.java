package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.NotPossHitterResDto;
import com.ssafy.theground.dto.res.NotPossPitcherResDto;
import com.ssafy.theground.dto.res.PossHitterResDto;
import com.ssafy.theground.dto.res.PossPitcherResDto;
import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TradeService {
    private final TradeRepository tradeRepository;

    public PossPitcherResDto cc(){
        Pitcher pitcher = new Pitcher();
        PossPitcherResDto possPitcherResDto = new PossPitcherResDto();

        possPitcherResDto.setPitcherSeq(pitcher.getPitcherSeq());
        possPitcherResDto.setPitcherName(pitcher.getPitcherName());
        possPitcherResDto.setPitArm(pitcher.getPitArm());
        possPitcherResDto.setEra(pitcher.getEra());

        return possPitcherResDto;
    }

    public PossHitterResDto dd(){
        Hitter hitter = new Hitter();
        PossHitterResDto possHitterResDto = new PossHitterResDto();

        possHitterResDto.setHitterSeq(hitter.getHitterSeq());
        possHitterResDto.setHitterName(hitter.getHitterName());
        possHitterResDto.setBatArm(hitter.getBatArm());
        possHitterResDto.setAvg(hitter.getAvg());

        return possHitterResDto;
    }

    public NotPossPitcherResDto ee(){
        Pitcher pitcher = new Pitcher();
        NotPossPitcherResDto notPossPitcherResDto = new NotPossPitcherResDto();

        notPossPitcherResDto.setPitcherSeq(pitcher.getPitcherSeq());
        notPossPitcherResDto.setPitcherName(pitcher.getPitcherName());
        notPossPitcherResDto.setPitArm(pitcher.getPitArm());
        notPossPitcherResDto.setEra(pitcher.getEra());

        return notPossPitcherResDto;
    }

    public NotPossHitterResDto ff(){
        Hitter hitter = new Hitter();
        NotPossHitterResDto notPossHitterResDto = new NotPossHitterResDto();

        notPossHitterResDto.setHitterSeq(hitter.getHitterSeq());
        notPossHitterResDto.setHitterName(hitter.getHitterName());
        notPossHitterResDto.setBatArm(hitter.getBatArm());
        notPossHitterResDto.setAvg(hitter.getAvg());

        return notPossHitterResDto;
    }

    public void tradeIn(Long playerSeq){

    }

    public void tradeOut(Long playerSeq){

    }
}
