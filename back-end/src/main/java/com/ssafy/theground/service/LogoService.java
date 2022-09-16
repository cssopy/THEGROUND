package com.ssafy.theground.service;

import java.util.Optional;

import com.ssafy.theground.entity.Logo;

public interface LogoService {
	public Optional<Logo> findById(Long seq);
}
