package com.ssafy.theground.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ssafy.theground.exception.UnauthorizedException;
import com.ssafy.theground.service.JwtServiceImpl;

@Component
public class JwtInterceptor implements HandlerInterceptor {

	@Autowired
	private JwtServiceImpl jwtService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		String jwt = request.getHeader("X-ACCESS-TOKEN");
//		String jwt = request.getHeader("Authorization");
		if (jwt != null && jwtService.isUsable(jwt)) {
			return true;
		} else {
			throw new UnauthorizedException();
		}

	}
}
