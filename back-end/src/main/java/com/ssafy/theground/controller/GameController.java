package com.ssafy.theground.controller;

import com.ssafy.theground.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;

    @GetMapping("/brief")
    public ResponseEntity<?> teamBriefInfo(){

//        return new ResponseEntity<>(gameService.teamBriefInfo(), HttpStatus.OK)
        return null;
    }
}
