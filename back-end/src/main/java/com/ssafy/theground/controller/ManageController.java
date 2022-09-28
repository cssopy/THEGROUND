package com.ssafy.theground.controller;

import com.ssafy.theground.dto.res.HitterResDto;
import com.ssafy.theground.dto.res.PitcherResDto;
import com.ssafy.theground.dto.res.RotationResDto;
import com.ssafy.theground.entity.TeamSetting;
import com.ssafy.theground.service.JwtService;
import com.ssafy.theground.service.ManageService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/manage")
@RequiredArgsConstructor
public class ManageController {

    private final ManageService manageService;
    private final JwtService jwtService;

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
    
    @GetMapping("/rotation")
    public RotationResDto rotationList() throws Exception {
    	return manageService.rotationList(jwtService.getUserUid(jwtService.getJwt()));
    }
    
    @PutMapping("/rotation")
    public ResponseEntity<Map<String, Object>> rotationUpdate(@RequestBody Map<String, Long> vo){
    	Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		try {
			String uid = jwtService.getUserUid(jwtService.getJwt());
			Long[] seq = new Long[5];
			seq[0] = vo.get("teamSetting1stSp");
			seq[1] = vo.get("teamSettingwndSp");
			seq[2] = vo.get("teamSetting3rdSp");
			seq[3] = vo.get("teamSetting4thSp");
			seq[4] = vo.get("teamSetting5thSp");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		for(int i=0;i<5;i++) {
			
		}
		
		return new ResponseEntity<>(resultMap, status);
    }
}
