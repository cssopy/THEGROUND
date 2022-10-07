package com.ssafy.theground.service;

import java.util.List;

import com.ssafy.theground.dto.res.ResultResDto;

public interface ResultService {
	public List<ResultResDto> findByUserUid(String uid);
}
