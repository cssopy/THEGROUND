package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.HitterResDto;
import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.service.ManageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/manage")
@RequiredArgsConstructor
public class ManageController {

    private final ManageService manageService;

    @GetMapping("/pitchers")
    public ResponseEntity<?> pitcherList() throws Exception {
        List<PitcherResDto> pitcherResDtos = manageService.pitcherList();
        if(pitcherResDtos != null) {
            return new ResponseEntity<>(pitcherResDtos, HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/hitters")
    public ResponseEntity<?> hitterList() throws Exception {
        List<HitterResDto> hitterResDtos = manageService.hitterList();
        if(hitterResDtos != null) {
            return new ResponseEntity<>(hitterResDtos, HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
