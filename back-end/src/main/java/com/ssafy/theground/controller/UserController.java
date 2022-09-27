package com.ssafy.theground.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.theground.dto.res.UserMypageDto;
import com.ssafy.theground.entity.Logo;
import com.ssafy.theground.entity.TeamSetting;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.service.JwtService;
import com.ssafy.theground.service.LogoService;
import com.ssafy.theground.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	JwtService jwtService;
	
	@Autowired
	LogoService logoService;

	@GetMapping("")
	public String testMethod() {
		String path = System.getProperty("user.dir") ;    // 현재 프로젝트 파일 디렉토리 경로
        File file = new File(path);
        String[] strs =  file.list();
        String result = "";
        for(String str : strs)
            result += str+" "; 
		return result;
	}
	
	@Autowired
	EntityManager em;

	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> vo) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		System.out.println(vo.toString());
		String accessToken = vo.get("accessToken");
		String loginType = vo.get("loginType");

		System.out.println(accessToken);
		System.out.println(loginType);
		// 카카오 로그인인 경우
		if (loginType.equals("K")) {
			String reqURL = "https://kapi.kakao.com/v2/user/me";

			try {
				URL url = new URL(reqURL);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();

				conn.setRequestMethod("POST");
				conn.setDoOutput(true);
				conn.setRequestProperty("Authorization", "Bearer " + accessToken);

				int responseCode = conn.getResponseCode();
				System.out.println("responseCode : " + responseCode);

				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				String line = "";
				String result = "";

				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println("response body : " + result);

				JsonParser parser = new JsonParser();
				JsonElement element = parser.parse(result);

				String id = Long.toString(element.getAsJsonObject().get("id").getAsLong());
				// String nickname =
				// element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();

				System.out.println("id : " + id);

				Optional<User> user = userService.findByUserUid(id);
				// db에 존재하는 회원이라면
				if (user.isPresent()) {
					resultMap.put("userTeamname", user.get().getUserTeamname());
					resultMap.put("jwt", jwtService.createJwt(user.get().getUserUid()));
					resultMap.put("message", "success");
					status = HttpStatus.OK;
				}
				// db에 없는 경우 회원가입 하라고 보내야 한다.
				else {
					resultMap.put("loginType", "K");
					resultMap.put("uid", id);
					resultMap.put("message", "회원가입을 먼저 해주세요.");
					status = HttpStatus.ACCEPTED;
				}

			} catch (IOException e) {
				e.printStackTrace();
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
		}

		else if(loginType.equals("N")) {
			String reqURL = "https://openapi.naver.com/v1/nid/me";
			try {
	            URL url = new URL(reqURL);
	            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	            conn.setRequestMethod("POST");

	            //    요청에 필요한 Header에 포함될 내용
	            conn.setRequestProperty("Authorization", "Bearer " + accessToken);

	            int responseCode = conn.getResponseCode();
	            System.out.println("responseCode : " + responseCode);

	            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

	            String line = "";
	            String result = "";

	            while ((line = br.readLine()) != null) {
	                result += line;
	            }
	            System.out.println("response body : " + result);

	            JsonParser parser = new JsonParser();
	            JsonElement element = parser.parse(result);

	            String id = element.getAsJsonObject().get("response").getAsJsonObject().get("id").getAsString();
	            System.out.println("id : " + id);

	            Optional<User> user = userService.findByUserUid(id);
				// 이미 db에 존재하는 회원이라면
				if (user.isPresent()) {
					resultMap.put("uid", user.get().getUserUid());
					resultMap.put("jwt", jwtService.createJwt(user.get().getUserUid()));
					resultMap.put("message", "success");
					status = HttpStatus.OK;
				}
				// db에 없는 경우 회원가입 하라고 보내야 한다.
				else {
					resultMap.put("loginType", "N");
					resultMap.put("uid", id);
					resultMap.put("message", "회원가입을 먼저 해주세요.");
					status = HttpStatus.ACCEPTED;
				}
	        } catch (IOException e) {
	        	e.printStackTrace();
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
	        }
		}
//
//
		else if(loginType.equals("G")) {
			String reqURL = "https://www.googleapis.com/oauth2/v3/userinfo";

			try {
				URL url = new URL(reqURL);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();

				conn.setRequestMethod("GET");
				conn.setDoOutput(true);
				conn.setRequestProperty("Authorization", "Bearer " + accessToken);

				int responseCode = conn.getResponseCode();
				System.out.println("responseCode : " + responseCode);

				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				String line = "";
				String result = "";

				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println("response body : " + result);

				JsonParser parser = new JsonParser();
				JsonElement element = parser.parse(result);

				String id = element.getAsJsonObject().get("sub").getAsString();
				// String nickname =
				// element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();

				System.out.println("id : " + id);

				Optional<User> user = userService.findByUserUid(id);
				// 이미 db에 존재하는 회원이라면
				if (user.isPresent()) {
					resultMap.put("uid", user.get().getUserUid());
					resultMap.put("jwt", jwtService.createJwt(user.get().getUserUid()));
					resultMap.put("message", "success");
					status = HttpStatus.OK;
				}
				// db에 없는 경우 회원가입 하라고 보내야 한다.
				else {
					resultMap.put("loginType", "G");
					resultMap.put("uid", id);
					resultMap.put("message", "회원가입을 먼저 해주세요.");
					status = HttpStatus.ACCEPTED;
				}

			} catch (IOException e) {
				e.printStackTrace();
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}

		}
		return new ResponseEntity<>(resultMap, status);
	}

	@PostMapping("/signup")
	public ResponseEntity<Map<String, Object>> signup(@RequestBody Map<String, String> vo) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		String uid = vo.get("uid");
		String userTeamname = vo.get("userTeamname");
		Long logoSeq = Long.valueOf(vo.get("logoSeq"));
		String loginType = vo.get("loginType");

		if (!userService.findByUserUid(uid).isPresent()) {
			User u = new User();
			u.setUserInPlayFlag(false);
			u.setLogo(logoService.findById(logoSeq).get());
			u.setUserExp(0);
			u.setUserLevel(1);
			u.setUserLogintype(loginType.charAt(0));
			u.setUserPayroll(10000000);
			u.setUserTeamname(userTeamname);
			u.setUserWin(0);
			u.setUserLose(0);
			u.setUserDraw(0);
			u.setUserUid(uid);
			u.setTeamSetting(null);
			userService.save(u);
			
			resultMap.put("userTeamname", userTeamname);
			resultMap.put("jwt", jwtService.createJwt(uid));
			resultMap.put("message", "success");
			status = HttpStatus.ACCEPTED;
		}

		return new ResponseEntity<>(resultMap, status);
	}
	
	@PutMapping("/modify")
	public ResponseEntity<Map<String, Object>> modify(@RequestBody Map<String, String> vo) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		String userTeamname = vo.get("userTeamname");
		Long logoSeq = Long.valueOf(vo.get("logoSeq"));
		try {
			User u = userService.findByUserUid(jwtService.getUserUid(jwtService.getJwt())).get();
			u.setLogo(logoService.findById(logoSeq).get());
			u.setUserTeamname(userTeamname);
			userService.save(u);
			em.clear();
			resultMap.put("message", "success");
			status = HttpStatus.ACCEPTED;
			return new ResponseEntity<>(resultMap, status);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			resultMap.put("message", "업데이트에 실패하였습니다.");
			status = HttpStatus.BAD_REQUEST;
			return new ResponseEntity<>(resultMap, status);
		}
	}
	
	@DeleteMapping("/quit")
	public ResponseEntity<Map<String, Object>> quit(@RequestBody Map<String, String> vo){
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		String uid = vo.get("uid");
		
		Optional<User> o = userService.findByUserUid(uid);
		if(o.isPresent()) {
			userService.quitUser(uid);
			resultMap.put("message", "success");
			status = HttpStatus.ACCEPTED;
		} else {
			resultMap.put("message", "failed");
			status = HttpStatus.BAD_REQUEST;
		}
		return new ResponseEntity<>(resultMap, status);
	}
	
	@GetMapping("/logos")
	public List<Logo> findAll(){
		return logoService.findAll();
	}
	
	@GetMapping("/list")
	public List<User> findAllUser(){
		return userService.findAll();
	}
	
	@GetMapping("/mypage")
	public UserMypageDto mymage() {
		try {
			User u = userService.findByUserUid(jwtService.getUserUid(jwtService.getJwt())).get();
			UserMypageDto dto = new UserMypageDto(u);
			return dto;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
}
