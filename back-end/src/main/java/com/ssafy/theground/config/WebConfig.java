package com.ssafy.theground.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.theground.interceptor.JwtInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(this.jwtInterceptor())
				.addPathPatterns("/**")
				.excludePathPatterns("/users/login")
				.excludePathPatterns("/users/signup")
				.excludePathPatterns("/users/logos");
	}

	@Autowired
	protected JwtInterceptor jwtInterceptor() {
		return new JwtInterceptor();
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedHeaders("*")
				.allowedMethods("GET", "POST", "PUT", "DELETE");
	}
}