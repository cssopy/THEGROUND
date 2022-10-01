package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.BriefInfoResDto;
import com.ssafy.theground.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;

    @GetMapping("/brief")
    public ResponseEntity<?> teamBriefInfo() throws Exception {
        Map<String, BriefInfoResDto> stringBriefInfoResDtoMap = gameService.teamBriefInfo();
        if(stringBriefInfoResDtoMap != null) {
            return new ResponseEntity<>(stringBriefInfoResDtoMap, HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/change")
    public ResponseEntity<?> changePlayer() throws Exception {
        Map<String, List<?>> stringListMap = gameService.changePlayer();
        if(!stringListMap.isEmpty()) {
            return new ResponseEntity<>(gameService.changePlayer(), HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
