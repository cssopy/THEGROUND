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
    public ResponseEntity<?> aa(){
        return new ResponseEntity<>(manageService.aa(), HttpStatus.OK);
    }

    @GetMapping("/hitters")
    public ResponseEntity<?> bb(){
        return new ResponseEntity<>(manageService.bb(), HttpStatus.OK);
    }
}
