package com.ssafy.theground.service;

import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.repository.StatsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StatsService {

    private StatsRepository statsRepository;

    public ResponseEntity<?> aa(@RequestParam Long id){
//        if(id == 투수Seq){
//            Pitcher pitcher = new Pitcher();
//            return new ResponseEntity<>(pitcher, HttpStatus.OK);
//        } else if(id == 타자Seq){
//            Hitter hitter = new Hitter();
//            return new ResponseEntity<>(hitter, HttpStatus.OK);
//        }
    }
}
