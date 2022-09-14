package com.ssafy.theground.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
public class MainController {

    @GetMapping("/pitches")
    public ResponseEntity<?> simplePitcherLineUp(){
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
