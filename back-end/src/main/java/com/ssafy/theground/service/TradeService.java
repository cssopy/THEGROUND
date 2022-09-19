package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.NotPossHitterResDto;
import com.ssafy.theground.dto.res.NotPossPitcherResDto;
import com.ssafy.theground.dto.res.PossHitterResDto;
import com.ssafy.theground.dto.res.PossPitcherResDto;
import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserPitcher;
import com.ssafy.theground.repository.ManagePitcherRepository;
import com.ssafy.theground.repository.PitcherRepository;
import com.ssafy.theground.repository.TradeRepository;
import com.ssafy.theground.repository.UserRepository;
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

    private final PitcherRepository pitcherRepository;


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
