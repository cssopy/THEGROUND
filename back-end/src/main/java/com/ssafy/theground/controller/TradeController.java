package com.ssafy.theground.controller;

import com.ssafy.theground.service.TradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trade")
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @GetMapping("/poss-pitchers")
    public ResponseEntity<?> possPitcherList() throws Exception {
        if(tradeService.possPitcherList() != null) {
            return new ResponseEntity<>(tradeService.possPitcherList(), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/poss-hitters")
    public ResponseEntity<?> possHitterList() throws Exception {
        if(tradeService.possHitterList() != null) {
            return new ResponseEntity<>(tradeService.possHitterList(), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/not-poss-pitchers")
    public ResponseEntity<?> notPossPitcherList() throws Exception {
        if(tradeService.notPossPitcherList() != null) {
            return new ResponseEntity<>(tradeService.notPossPitcherList(), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/not-poss-hitters")
    public ResponseEntity<?> notPossHitterList() throws Exception {
        if(tradeService.notPossHitterList() != null) {
            return new ResponseEntity<>(tradeService.notPossHitterList(), HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/in")
    public ResponseEntity<?> tradeIn(@RequestBody Long playerSeq){
        tradeService.tradeIn(playerSeq);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("/out")
    public ResponseEntity<?> tradeOut(@RequestBody Long playerSeq){
        tradeService.tradeOut(playerSeq);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
