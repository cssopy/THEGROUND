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

    private final TeamSettingRepository teamSettingRepository;


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

        if (byUserUid.isPresent()) {
            List<UserPitcher> byUserSeq = managePitcherRepository.findByUserSeq(byUserUid.get());
            List<Long> pitcherSeq = new ArrayList<>();

            if (byUserSeq.isEmpty()) {
                List<Pitcher> allPitcher = pitcherRepository.findAll();
                for (Pitcher one : allPitcher) {
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
            } else {
                for (UserPitcher u : byUserSeq) {
                    Long pitSeq = u.getPitcherSeq();
                    if (pitSeq == null) {
                        continue;
                    }
                    pitcherSeq.add(pitSeq);
                }
                List<Pitcher> all = pitcherRepository.findAllByPitcherSeqNotIn(pitcherSeq);
                for (Pitcher one : all) {
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
            }
            return list;
        }
        return null;
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
        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        if(byUserUid.isPresent()) {
            List<UserPitcher> pitcher = new ArrayList<>();
            List<UserHitter> hitter = new ArrayList<>();

            // 선발 투수 로테이션 삭제
            teamSettingRepository.delete(byUserUid.get().getTeamSetting());

            // 보유 투수 모두 삭제
            managePitcherRepository.deleteAll();
            // 투수 이적(in)
            for (Long seq : tradeSaveReqDto.getPitcherSeq()) {
                System.out.println("pSeq = " + seq);
                UserPitcher p = new UserPitcher();
                p.setPitcherSeq(seq);
                p.setUserSeq(byUserUid.get());
                p.setUserPitcherName(pitcherRepository.findByPitcherSeq(seq).getPitcherName());

                pitcher.add(p);
            }
            managePitcherRepository.saveAll(pitcher);

            // 보유 타자 모두 삭제
            manageHitterRepository.deleteAll();
            // 타자 이적(in)
            for (Long seq : tradeSaveReqDto.getHitterSeq()) {
                System.out.println("hSeq = " + seq);
                UserHitter h = new UserHitter();
                h.setHitterSeq(seq);
                h.setUserSeq(byUserUid.get());
                h.setUserHitterName(hitterRepository.findByHitterSeq(seq).getHitterName());

                hitter.add(h);
            }
            manageHitterRepository.saveAll(hitter);
            return true;
        }
        return false;
    }
}
