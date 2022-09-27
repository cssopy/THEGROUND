package com.ssafy.theground.service;

import com.ssafy.theground.repository.HitterRepository;
import com.ssafy.theground.repository.PitcherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class StatsService {

    private final PitcherRepository pitcherRepository;

    private final HitterRepository hitterRepository;

    @Transactional
    public ResponseEntity<?> statsDetail(String type, Long playerSeq){

        // 투수
        if(type == "P") {
            return new ResponseEntity<>(pitcherRepository.findByPitcherSeq(playerSeq), HttpStatus.OK);
        }
        // 타자
        else if(type == "H") {
            return new ResponseEntity<>(hitterRepository.findByHitterSeq(playerSeq), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
