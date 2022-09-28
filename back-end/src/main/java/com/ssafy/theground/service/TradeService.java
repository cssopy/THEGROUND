package com.ssafy.theground.service;

import com.ssafy.theground.dto.req.TradeSaveReqDto;
import com.ssafy.theground.dto.res.PossOrNotHitterResDto;
import com.ssafy.theground.dto.res.PossOrNotPitcherResDto;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


    @Transactional
    public List<PossOrNotPitcherResDto> possPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserPitcher> allPitchers = managePitcherRepository.findAllByUserSeq(byUserUid.get());
            for(UserPitcher onePitcher : allPitchers){
                Optional<Pitcher> byId = pitcherRepository.findById(onePitcher.getPitcherSeq());
                if (byId.isPresent()){
                    PossOrNotPitcherResDto possOrNotPitcherResDto = new PossOrNotPitcherResDto();
                    possOrNotPitcherResDto.setPitcherSeq(byId.get().getPitcherSeq());
                    possOrNotPitcherResDto.setPitcherName(byId.get().getPitcherName());
                    possOrNotPitcherResDto.setPitArm(byId.get().getPitArm());
                    possOrNotPitcherResDto.setEra(byId.get().getEra());
                    possOrNotPitcherResDto.setInning(byId.get().getInning());
                    possOrNotPitcherResDto.setWin(byId.get().getWin());
                    possOrNotPitcherResDto.setLose(byId.get().getLose());
                    possOrNotPitcherResDto.setSalary(byId.get().getSalary());

                    list.add(possOrNotPitcherResDto);
                } else return null;
            }
        } else return null;

        return list;
    }

    @Transactional
    public List<PossOrNotHitterResDto> possHitterList() throws Exception {
        List<PossOrNotHitterResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserHitter> allHitters = manageHitterRepository.findAllByUserSeq(byUserUid.get());
            for(UserHitter oneHitter : allHitters){
                Optional<Hitter> byId = hitterRepository.findById(oneHitter.getHitterSeq());
                if (byId.isPresent()){
                    PossOrNotHitterResDto possOrNotHitterResDto = new PossOrNotHitterResDto();
                    possOrNotHitterResDto.setHitterSeq(byId.get().getHitterSeq());
                    possOrNotHitterResDto.setHitterName(byId.get().getHitterName());
                    possOrNotHitterResDto.setBatArm(byId.get().getBatArm());
                    possOrNotHitterResDto.setAvg(byId.get().getAvg());
                    possOrNotHitterResDto.setObp(byId.get().getObp());
                    possOrNotHitterResDto.setSlg(byId.get().getSlg());
                    possOrNotHitterResDto.setHomerun(byId.get().getHomerun());
                    possOrNotHitterResDto.setSalary(byId.get().getSalary());

                    list.add(possOrNotHitterResDto);
                } else return null;
            }
        } else return null;

        return list;
    }

    @Transactional
    public List<PossOrNotPitcherResDto> notPossPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserPitcher> byUserSeq = managePitcherRepository.findByUserSeq(byUserUid.get());
            List<Long> pitcherSeq = new ArrayList<>();
            byUserSeq.forEach(userPitcher -> pitcherSeq.add(userPitcher.getPitcherSeq()));

            List<Pitcher> all = pitcherRepository.findAllByPitcherSeqNotIn(pitcherSeq);
            for(Pitcher one : all){
                PossOrNotPitcherResDto possOrNotPitcherResDto = new PossOrNotPitcherResDto();
                possOrNotPitcherResDto.setPitcherSeq(one.getPitcherSeq());
                possOrNotPitcherResDto.setPitcherName(one.getPitcherName());
                possOrNotPitcherResDto.setPitArm(one.getPitArm());
                possOrNotPitcherResDto.setEra(one.getEra());
                possOrNotPitcherResDto.setInning(one.getInning());
                possOrNotPitcherResDto.setWin(one.getWin());
                possOrNotPitcherResDto.setLose(one.getLose());
                possOrNotPitcherResDto.setSalary(one.getSalary());

                list.add(possOrNotPitcherResDto);
            }
        } else return null;

        return list;
    }

    @Transactional
    public List<PossOrNotHitterResDto> notPossHitterList() throws Exception {
        List<PossOrNotHitterResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if (byUserUid.isPresent()){
            List<UserHitter> byUserSeq = manageHitterRepository.findByUserSeq(byUserUid.get());
            List<Long> hitterSeq = new ArrayList<>();
            byUserSeq.forEach(userHitter -> hitterSeq.add(userHitter.getHitterSeq()));
            List<Hitter> all = hitterRepository.findAllByHitterSeqNotIn(hitterSeq);
            for(Hitter one : all){
                PossOrNotHitterResDto possOrNotHitterResDto = new PossOrNotHitterResDto();
                possOrNotHitterResDto.setHitterSeq(one.getHitterSeq());
                possOrNotHitterResDto.setHitterName(one.getHitterName());
                possOrNotHitterResDto.setBatArm(one.getBatArm());
                possOrNotHitterResDto.setAvg(one.getAvg());
                possOrNotHitterResDto.setObp(one.getObp());
                possOrNotHitterResDto.setSlg(one.getSlg());
                possOrNotHitterResDto.setHomerun(one.getHomerun());
                possOrNotHitterResDto.setSalary(one.getSalary());

                list.add(possOrNotHitterResDto);
            }
        } else return null;

        return list;
    }

    @Transactional
    public boolean tradeSave(TradeSaveReqDto tradeSaveReqDto) throws Exception {
        User byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt())).orElseThrow(() -> new IllegalArgumentException("mesg"));
//        if(byUserUid.isPresent()) {
            UserPitcher pitcher = new UserPitcher();
            UserHitter hitter = new UserHitter();

            // 보유 투수 모두 삭제
            managePitcherRepository.deleteAll();
            // 투수 이적(in)
            for (Long seq : tradeSaveReqDto.getPitcherSeq()) {
                System.out.println("pSeq = " + seq);
                pitcher.builder()
//                        .userSeq(byUserUid.get())
                        .userSeq(byUserUid)
                        .pitcherSeq(seq)
                        .userPitcherName(pitcherRepository.findByPitcherSeq(seq).getPitcherName()).build();
            }

            // 보유 타자 모두 삭제
            manageHitterRepository.deleteAll();
            // 타자 이적(in)
            for (Long seq : tradeSaveReqDto.getHitterSeq()) {
                System.out.println("hSeq = " + seq);
                hitter.builder()
//                        .userSeq(byUserUid.get())
                        .userSeq(byUserUid)
                        .hitterSeq(seq)
                        .userHitterName(hitterRepository.findByHitterSeq(seq).getHitterName()).build();
            }
            managePitcherRepository.save(pitcher);
            manageHitterRepository.save(hitter);
            return true;
//        }
//        return false;
    }
}
