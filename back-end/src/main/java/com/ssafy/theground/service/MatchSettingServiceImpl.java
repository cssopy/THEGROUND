package com.ssafy.theground.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.entity.Match;
import com.ssafy.theground.entity.MatchSetting;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserHitter;
import com.ssafy.theground.entity.UserPitcher;
import com.ssafy.theground.repository.MatchRepository;
import com.ssafy.theground.repository.MatchSettingRepository;
import com.ssafy.theground.repository.UserHitterRepository;
import com.ssafy.theground.repository.UserPitcherRepository;
import com.ssafy.theground.repository.UserRepository;

@Service
@Transactional
public class MatchSettingServiceImpl implements MatchSettingService {
	@Autowired
	MatchRepository matchRepository;

	@Autowired
	MatchSettingRepository matchSettingRepository;

	@Autowired
	UserPitcherRepository userPitcherRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserHitterRepository userHitterRepository;

	@Override
	public void matchSettingSave(String uid, Long[] list) throws Exception {
		Optional<UserPitcher> userPitcher;
		Optional<UserHitter> userHitter;
		Optional<Match> match;
		User u = userRepository.findByUserUid(uid).get();
		MatchSetting m = new MatchSetting();
		match = matchRepository.findByMatchSeq(list[0]);
		userPitcher = userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), list[1]);
		m.setMatch(match.get());
		m.setMatchSettingPitcher(userPitcher.get());

		for (int i = 2; i < 11; i++) {
			userHitter = userHitterRepository.findByUserSeq_UserSeqAndHitterSeq(u.getUserSeq(), list[i]);
			if (userHitter.isPresent()) {
				if (i == 2) {
					m.setMatchSetting1st(userHitter.get());
				} else if (i == 3) {
					m.setMatchSetting2nd(userHitter.get());
				} else if (i == 4) {
					m.setMatchSetting3rd(userHitter.get());
				} else if (i == 5) {
					m.setMatchSetting4th(userHitter.get());
				} else if (i == 6) {
					m.setMatchSetting5th(userHitter.get());
				} else if (i == 7) {
					m.setMatchSetting6th(userHitter.get());
				} else if (i == 8) {
					m.setMatchSetting7th(userHitter.get());
				} else if (i == 9) {
					m.setMatchSetting8th(userHitter.get());
				} else if (i == 10) {
					m.setMatchSetting9th(userHitter.get());
				}
			} else {
				throw new Exception("에러 발생");
			}
		}
		m.setMatchSettingNextBat(1);
		matchSettingRepository.save(m);
	}
}
