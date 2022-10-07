package com.ssafy.theground.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.entity.AISetting;
import com.ssafy.theground.repository.AISettingRepository;

@Service
@Transactional
public class AISettingServiceImpl implements AISettingService{

	@Autowired
	AISettingRepository aISettingRepository;
	
	@Override
	public AISetting findByAiTeamSeq(Long aiTeamSeq) {
		// TODO Auto-generated method stub
		return aISettingRepository.findByAiTeamSeq(aiTeamSeq).get();
	}
	
}
