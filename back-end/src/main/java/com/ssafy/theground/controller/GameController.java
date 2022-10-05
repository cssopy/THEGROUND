package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.BriefInfoResDto;
import com.ssafy.theground.dto.res.LineupResDto;
import com.ssafy.theground.dto.res.ScoreResultResDto;
import com.ssafy.theground.service.GameService;
import com.ssafy.theground.service.JwtService;
import com.ssafy.theground.service.MatchSettingService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
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

	@GetMapping("/play")
	public ResponseEntity<Map<String, Object>> playSimulate() {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			resultMap = gameService.battingSimulate(uid);
			status = HttpStatus.OK;
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("message", "게임 진행 정보를 가져오는 데에 실패했습니다.\nError: Access Denied");
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(resultMap, status);
	}
    
    @PostMapping("/batting-order")
    public ResponseEntity<Map<String, Object>> battingOrder(@RequestBody Map<String, Long> vo){
    	Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
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

    @GetMapping("/change")
    public ResponseEntity<?> changePlayer() throws Exception {
        Map<String, List<?>> stringListMap = gameService.changePlayer();
        if(!stringListMap.isEmpty()) {
            return new ResponseEntity<>(gameService.changePlayer(), HttpStatus.OK);
        }
        else return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/line-up")
    public LineupResDto getLineup(@RequestBody Map<String, String> vo) {
    	try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			Long matchSeq = Long.valueOf(vo.get("matchSeq"));
			
			return gameService.getLineup(uid, matchSeq);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
    
    }

    @GetMapping("/result")
    public ScoreResultResDto getResult(@RequestBody Map<String, String> vo) {
    	try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			Long matchSeq = Long.valueOf(vo.get("matchSeq"));
			System.out.println(matchSeq);

			return gameService.getResult(uid, matchSeq);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
    }
    
    @GetMapping("/logs")
	public ResponseEntity<List<Map<String, Object>>> getMatchLog() {
		List<Map<String, Object>> resultList = new LinkedList<>();
		HttpStatus status;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			resultList = gameService.getLogs(uid);
			status = HttpStatus.OK;
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(resultList, status);
	}

	@PutMapping("/change-pitcher")
	public ResponseEntity<String> changePitcher(@RequestBody Map<String, Integer> request) {
		HttpStatus status;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			boolean result = gameService.changePitcher(uid, request.get("playerInSeq"));
			if (result) status = HttpStatus.OK;
			else status = HttpStatus.BAD_REQUEST;
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(status);
	}

	@PutMapping("/change-hitter")
	public ResponseEntity<String> changeHitter(@RequestBody Map<String, Integer> request) {
		HttpStatus status;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			boolean result = gameService.changeHitter(uid, request.get("playerInSeq"), request.get("playerOut"));
			if (result) status = HttpStatus.OK;
			else status = HttpStatus.BAD_REQUEST;
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(status);
	}
}
