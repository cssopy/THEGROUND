package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.NotPossHitterResDto;
import com.ssafy.theground.dto.res.NotPossPitcherResDto;
import com.ssafy.theground.dto.res.PossHitterResDto;
import com.ssafy.theground.dto.res.PossPitcherResDto;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TradeService {
    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final ManagePitcherRepository managePitcherRepository;

    private final ManageHitterRepository manageHitterRepository;

    private final PitcherRepository pitcherRepository;

    private final HitterRepository hitterRepository;


    public List<PossPitcherResDto> possPitcherList() throws Exception {
        List<PossPitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserPitcher> allPitchers = managePitcherRepository.findAllByUserSeq(byUserUid.get().getUserSeq());
            for(UserPitcher onePitcher : allPitchers){
                Optional<Pitcher> byId = pitcherRepository.findById(onePitcher.getPitcherSeq());
                if (byId.isPresent()){
                    PossPitcherResDto possPitcherResDto = new PossPitcherResDto();
                    possPitcherResDto.setPitcherSeq(byId.get().getPitcherSeq());
                    possPitcherResDto.setPitcherName(byId.get().getPitcherName());
                    possPitcherResDto.setPitArm(byId.get().getPitArm());
                    possPitcherResDto.setEra(byId.get().getEra());

                    list.add(possPitcherResDto);
                } else return null;
            }
        } else return null;

        return list;
    }

    public List<PossHitterResDto> possHitterList() throws Exception {
        List<PossHitterResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserHitter> allHitters = manageHitterRepository.findAllByUserSeq(byUserUid.get().getUserSeq());
            for(UserHitter oneHitter : allHitters){
                Optional<Hitter> byId = hitterRepository.findById(oneHitter.getHitterSeq());
                if (byId.isPresent()){
                    PossHitterResDto possHitterResDto = new PossHitterResDto();
                    possHitterResDto.setHitterSeq(byId.get().getHitterSeq());
                    possHitterResDto.setHitterName(byId.get().getHitterName());
                    possHitterResDto.setBatArm(byId.get().getBatArm());
                    possHitterResDto.setAvg(byId.get().getAvg());

                    list.add(possHitterResDto);
                } else return null;
            }
        } else return null;

        return list;
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
