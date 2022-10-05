package com.ssafy.theground.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.theground.interceptor.JwtInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer{

	private static final String[] EXCLUDE_PATHS = {
			"/users/login",
			"/users/signup",
			
	};

	@Autowired
	private JwtInterceptor jwtInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// 실제환경에서는 패턴추가 다해줘야함.
//		registry.addInterceptor(jwtInterceptor).addPathPatterns("/**")
//											.excludePathPatterns(EXCLUDE_PATHS);
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedHeaders("*")
				.allowedMethods("GET", "POST", "PUT", "DELETE");
	}
}