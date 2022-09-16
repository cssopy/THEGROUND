package com.ssafy.theground.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.ssafy.theground.entity.Logo;
import com.ssafy.theground.repository.LogoRepository;

public class LogoServiceImpl implements LogoService{
	
	@Autowired
	LogoRepository logoRepository;

	@Override
	public Optional<Logo> findById(Long seq) {
		return logoRepository.findById(seq);
	}

}