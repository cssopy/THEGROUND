package com.ssafy.theground.controller;

import com.ssafy.theground.service.StatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stats")
@RequiredArgsConstructor
public class StatsController {

    private final StatsService statsService;

    @GetMapping
    public ResponseEntity<?> statsDetail(@RequestParam("playerType") String type, @RequestParam("id") Long playerSeq){
        return statsService.statsDetail(type, playerSeq);
    }
}
