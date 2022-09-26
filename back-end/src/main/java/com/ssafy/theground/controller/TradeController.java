package com.ssafy.theground.controller;

import com.ssafy.theground.dto.req.TradeSaveReqDto;
import com.ssafy.theground.dto.res.PossOrNotHitterResDto;
import com.ssafy.theground.dto.res.PossOrNotPitcherResDto;
import com.ssafy.theground.service.TradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/trade")
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @GetMapping("/poss-pitchers")
    public ResponseEntity<?> possPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> possOrNotPitcherResDtos = tradeService.possPitcherList();
        if(possOrNotPitcherResDtos != null) {
            return new ResponseEntity<>(possOrNotPitcherResDtos, HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/poss-hitters")
    public ResponseEntity<?> possHitterList() throws Exception {
        List<PossOrNotHitterResDto> possOrNotHitterResDtos = tradeService.possHitterList();
        if(possOrNotHitterResDtos != null) {
            return new ResponseEntity<>(possOrNotHitterResDtos, HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/not-poss-pitchers")
    public ResponseEntity<?> notPossPitcherList() throws Exception {
        List<PossOrNotPitcherResDto> possOrNotPitcherResDtos = tradeService.notPossPitcherList();
        if(possOrNotPitcherResDtos != null) {
            return new ResponseEntity<>(possOrNotPitcherResDtos, HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/not-poss-hitters")
    public ResponseEntity<?> notPossHitterList() throws Exception {
        List<PossOrNotHitterResDto> possOrNotHitterResDtos = tradeService.notPossHitterList();
        if(possOrNotHitterResDtos != null) {
            return new ResponseEntity<>(possOrNotHitterResDtos, HttpStatus.OK);
        } else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/save")
    public ResponseEntity<?> tradeSave(@RequestBody TradeSaveReqDto tradeSaveReqDto) throws Exception {
        boolean b = tradeService.tradeSave(tradeSaveReqDto);
        if (b) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }
}
