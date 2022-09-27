package com.ssafy.theground.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.dto.res.ResultResDto;
import com.ssafy.theground.entity.Result;
import com.ssafy.theground.repository.AITeamRepository;
import com.ssafy.theground.repository.LogoRepository;
import com.ssafy.theground.repository.MatchRepository;
import com.ssafy.theground.repository.ResultRepository;
import com.ssafy.theground.repository.UserRepository;

@Service
@Transactional
public class ResultServiceImpl implements ResultService{

	@Autowired
	MatchRepository matchRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AITeamRepository aITeamRepository;
	
	@Autowired
	ResultRepository resultRepository;
	
	@Autowired
	LogoRepository logoRepository;
	
	@Override
	public List<ResultResDto> findByUserUid(String uid) {
		List<ResultResDto> list = new ArrayList<ResultResDto>();
		matchRepository.findByUserSeq_UserUidOrderByMatchSeqDesc(uid).forEach(e->{
			ResultResDto r = new ResultResDto();
			//true일때 home
			if(e.getMatchHomeFlag()) {
				r.setHome(e.getUserSeq().getUserTeamname());
				r.setHomeLogo(e.getUserSeq().getLogo().getLogoUrl());
				r.setAway(aITeamRepository.findById(e.getAiTeamSeq()).get().getAiTeamName());
				r.setAwayLogo(aITeamRepository.findById(e.getAiTeamSeq()).get().getLogoSeq().getLogoUrl());
				r.setHomeScore(resultRepository.findByMatchSeq(e.getMatchSeq()).get().getResultUserScore());
				r.setAwayScore(resultRepository.findByMatchSeq(e.getMatchSeq()).get().getResultOpponentScore());
				r.setResult(r.getHomeScore()==r.getAwayScore()?"Draw":(r.getHomeScore()>r.getAwayScore()?"Win":"Lose"));
			}else {
				r.setAway(e.getUserSeq().getUserTeamname());
				r.setAwayLogo(e.getUserSeq().getLogo().getLogoUrl());
				r.setHome(aITeamRepository.findById(e.getAiTeamSeq()).get().getAiTeamName());
				r.setHomeLogo(aITeamRepository.findById(e.getAiTeamSeq()).get().getLogoSeq().getLogoUrl());
				r.setAwayScore(resultRepository.findByMatchSeq(e.getMatchSeq()).get().getResultUserScore());
				r.setHomeScore(resultRepository.findByMatchSeq(e.getMatchSeq()).get().getResultOpponentScore());
				r.setResult(r.getHomeScore()==r.getAwayScore()?"Draw":(r.getHomeScore()>r.getAwayScore()?"Lose":"Win"));
			}
			
			list.add(r);
		});
			
		return list;
	}
	
}
