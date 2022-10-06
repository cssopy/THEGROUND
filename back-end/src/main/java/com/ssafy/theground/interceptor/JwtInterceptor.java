package com.ssafy.theground.interceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ssafy.theground.service.JwtServiceImpl;

@Component
public class JwtInterceptor implements HandlerInterceptor {

	@Resource
	private JwtServiceImpl jwtService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		String jwt = request.getHeader("X-ACCESS-TOKEN");
//		String jwt = request.getHeader("Authorization");
		if (jwt != null && jwtService.isUsable(jwt)) {
			return true;
		} else {
			response.setStatus(401);
			return false;
		}
	}
}
