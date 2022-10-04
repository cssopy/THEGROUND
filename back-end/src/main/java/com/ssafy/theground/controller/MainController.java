package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.MatchResDto;
import com.ssafy.theground.dto.res.ResultResDto;
import com.ssafy.theground.service.JwtService;
import com.ssafy.theground.service.MainService;
import com.ssafy.theground.service.ResultService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainController {

    private final MainService mainService;
    private final ResultService resultService;
    private final JwtService jwtService;

    @GetMapping("/schedules")
    public ResponseEntity<?> getSchedules() throws Exception {
        List<MatchResDto> schedules = mainService.getSchedules();
        if(schedules != null) {
            return new ResponseEntity<>(schedules, HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/matches")
    public List<ResultResDto> getMatches(){
    	try {
			return resultService.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return null;
		}
    }
}
