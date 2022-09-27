package com.ssafy.theground.service;

import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;
import com.ssafy.theground.repository.HitterRepository;
import com.ssafy.theground.repository.PitcherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class StatsService {

    private final PitcherRepository pitcherRepository;

    private final HitterRepository hitterRepository;

    @Transactional
    public Map<String, Object> statsDetail(){
        Map<String, Object> map = new HashMap<>();
        List<Pitcher> allPitchers = pitcherRepository.findAll();
        map.put("pitcher", allPitchers);
        List<Hitter> allHitters = hitterRepository.findAll();
        map.put("hitter", allHitters);

        return map;
    }
}
