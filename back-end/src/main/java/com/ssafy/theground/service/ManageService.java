package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.HitterResDto;
import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserPitcher;
import com.ssafy.theground.repository.ManagePitcherRepository;
import com.ssafy.theground.repository.PitcherRepository;
import com.ssafy.theground.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ManageService {

    private final ManagePitcherRepository manageRepository;

    private final PitcherRepository pitcherRepository;

    private final JwtService jwtService;

    private final UserRepository userRepository;

    // 투수 목록 상세 조회
    public List<PitcherResDto> pitcherList() throws Exception {
        List<PitcherResDto> list = new ArrayList<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if(byUserUid.isPresent()) {
            List<UserPitcher> allPitchers = manageRepository.findAllByUserSeq(byUserUid.get().getUserSeq());
            for (UserPitcher onePitcher : allPitchers) {
                Optional<Pitcher> byId = pitcherRepository.findById(onePitcher.getPitcherSeq());
                if(byId.isPresent()) {
                    PitcherResDto pitcherResDto = new PitcherResDto();
                    pitcherResDto.setPitcherName(byId.get().getPitcherName());
                    pitcherResDto.setPitArm(byId.get().getPitArm());
                    pitcherResDto.setEra(byId.get().getEra());
                    pitcherResDto.setGame(byId.get().getGame());
                    pitcherResDto.setInning(byId.get().getInning());
                    pitcherResDto.setWin(byId.get().getWin());
                    pitcherResDto.setLose(byId.get().getLose());

                    list.add(pitcherResDto);
                }
            }
        }
        return list;
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
