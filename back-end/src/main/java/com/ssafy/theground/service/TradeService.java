package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.NotPossHitterResDto;
import com.ssafy.theground.dto.res.PossHitterResDto;
import com.ssafy.theground.dto.res.PossOrNotPitcherResDto;
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


    public List<PossOrNotPitcherResDto> possPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserPitcher> allPitchers = managePitcherRepository.findAllByUserSeq(byUserUid.get().getUserSeq());
            for(UserPitcher onePitcher : allPitchers){
                Optional<Pitcher> byId = pitcherRepository.findById(onePitcher.getPitcherSeq());
                if (byId.isPresent()){
                    PossOrNotPitcherResDto possOrNotPitcherResDto = new PossOrNotPitcherResDto();
                    possOrNotPitcherResDto.setPitcherSeq(byId.get().getPitcherSeq());
                    possOrNotPitcherResDto.setPitcherName(byId.get().getPitcherName());
                    possOrNotPitcherResDto.setPitArm(byId.get().getPitArm());
                    possOrNotPitcherResDto.setEra(byId.get().getEra());

                    list.add(possOrNotPitcherResDto);
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

    public List<PossOrNotPitcherResDto> notPossPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<Long> pitcherSeqById = managePitcherRepository.findPitcherSeqById(byUserUid.get().getUserSeq());
            List<Pitcher> all = pitcherRepository.findAllByIdNotIn(pitcherSeqById);
            for(Pitcher one : all){
                PossOrNotPitcherResDto possOrNotPitcherResDto = new PossOrNotPitcherResDto();
                possOrNotPitcherResDto.setPitcherSeq(one.getPitcherSeq());
                possOrNotPitcherResDto.setPitcherName(one.getPitcherName());
                possOrNotPitcherResDto.setPitArm(one.getPitArm());
                possOrNotPitcherResDto.setEra(one.getEra());

                list.add(possOrNotPitcherResDto);
            }
        } else return null;



        return list;
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
