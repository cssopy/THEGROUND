package com.ssafy.theground.service;

import com.ssafy.theground.entity.AISetting;

public interface AISettingService {
	public AISetting findByAiTeamSeq(Long aiTeamSeq);
}
