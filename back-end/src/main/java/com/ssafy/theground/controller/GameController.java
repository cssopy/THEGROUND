package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.BriefInfoResDto;
import com.ssafy.theground.service.GameService;
import com.ssafy.theground.service.JwtService;
import com.ssafy.theground.service.MatchSettingService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;
    private final JwtService jwtService;
    private final MatchSettingService matchSettingService;

    @GetMapping("/brief")
    public ResponseEntity<?> teamBriefInfo() throws Exception {
        Map<String, BriefInfoResDto> stringBriefInfoResDtoMap = gameService.teamBriefInfo();
        if(stringBriefInfoResDtoMap != null) {
            return new ResponseEntity<>(stringBriefInfoResDtoMap, HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    
    @PostMapping("/batting-order")
    public ResponseEntity<Map<String, Object>> battingOrder(@RequestBody Map<String, Long> vo){
    	Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			Long[] list = new Long[11];
			list[0] = vo.get("matchSeq");
			list[1] = vo.get("matchSettingPitcher");
			list[2] = vo.get("matchSetting1st");
			list[3] = vo.get("matchSetting2nd");
			list[4] = vo.get("matchSetting3rd");
			list[5] = vo.get("matchSetting4th");
			list[6] = vo.get("matchSetting5th");
			list[7] = vo.get("matchSetting6th");
			list[8] = vo.get("matchSetting7th");
			list[9] = vo.get("matchSetting8th");
			list[10] = vo.get("matchSetting9th");
			
			matchSettingService.matchSettingSave(uid, list);
			
			resultMap.put("message", "업데이트 성공.");
			status = HttpStatus.ACCEPTED;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultMap.put("message", "업데이트에 실패하였습니다.");
			status = HttpStatus.BAD_REQUEST;
		}
		
		return new ResponseEntity<>(resultMap, status);
    
    }
}
