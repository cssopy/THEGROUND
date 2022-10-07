package com.ssafy.theground.service;

import com.ssafy.theground.entity.MatchSetting;

public interface MatchSettingService {
	public void matchSettingSave(String uid, Long[] list) throws Exception;
}
