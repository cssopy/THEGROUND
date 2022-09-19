package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.service.ManageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/manage")
@RequiredArgsConstructor
public class ManageController {

    private final ManageService manageService;

    @GetMapping("/pitchers")
    public ResponseEntity<?> pitcherList() throws Exception {
        if(manageService.pitcherList() != null) {
            return new ResponseEntity<>(manageService.pitcherList(), HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/hitters")
    public ResponseEntity<?> hitterList() throws Exception {
        if(manageService.hitterList() != null) {
            return new ResponseEntity<>(manageService.hitterList(), HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
