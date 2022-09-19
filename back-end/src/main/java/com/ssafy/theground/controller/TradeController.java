package com.ssafy.theground.controller;

import com.ssafy.theground.service.TradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trade")
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @GetMapping("/poss-pitchers")
    public ResponseEntity<?> possPitcherList(){
        return new ResponseEntity<>(tradeService.cc(), HttpStatus.OK);
    }

    @GetMapping("/poss-hitters")
    public ResponseEntity<?> possHitterList(){
        return new ResponseEntity<>(tradeService.dd(), HttpStatus.OK);
    }

    @GetMapping("/not-poss-pitchers")
    public ResponseEntity<?> notPossPitcherList(){
        return new ResponseEntity<>(tradeService.ee(), HttpStatus.OK);
    }

    @GetMapping("/not-poss-hitters")
    public ResponseEntity<?> notPossHitterList(){
        return new ResponseEntity<>(tradeService.ff(), HttpStatus.OK);
    }
}
