package com.ssafy.theground.interceptor;

import com.ssafy.theground.service.JwtServiceImpl;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JwtInterceptor implements HandlerInterceptor {
	@Resource
	private JwtServiceImpl jwtService;

	@Override
	public boolean preHandle(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) {
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
