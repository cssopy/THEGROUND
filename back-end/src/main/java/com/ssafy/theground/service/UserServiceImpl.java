package com.ssafy.theground.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.entity.TeamSetting;
import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserHitter;
import com.ssafy.theground.entity.UserPitcher;
import com.ssafy.theground.repository.HitterRepository;
import com.ssafy.theground.repository.PitcherRepository;
import com.ssafy.theground.repository.TeamSettingRepository;
import com.ssafy.theground.repository.UserHitterRepository;
import com.ssafy.theground.repository.UserPitcherRepository;
import com.ssafy.theground.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	EntityManager em;
	
	@Autowired
	HitterRepository hitterRepository;
	
	@Autowired
	PitcherRepository pitcherRepository;
	
	@Autowired
	UserHitterRepository userHitterRepository;
	
	@Autowired
	UserPitcherRepository userPitcherRepository;
	
	@Autowired
	TeamSettingRepository teamSettingRepository;

	@Override
	public Optional<User> findByUserUid(String useruid) {
		// TODO Auto-generated method stub
		return userRepository.findByUserUid(useruid);
	}

	@Override
	public void quitUser(String useruid) {
		Optional<User> u = userRepository.findByUserUid(useruid);
		if(u.isPresent()) {
			User user = u.get();
			user.setUserTeamname(null);
			user.setUserUid(null);
			userRepository.save(user);
		}
		
	}

	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	public void updateById(String useruid, User user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Long count() {
		return userRepository.count();
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}
	
	@Override
	public void setHitters(User u) {
		for(int i=1;i<=13;i++) {
			UserHitter h = new UserHitter();
			h.setUserSeq(u);
			h.setHitterSeq(Long.valueOf(Integer.toString(i)));
			h.setUserHitterName(hitterRepository.findByHitterSeq(Long.valueOf(Integer.toString(i))).getHitterName());
			userHitterRepository.save(h);
			em.clear();
		}
	}

	@Override
	public void setPitchers(User u) {
		for(int i=1;i<=7;i++) {
			UserPitcher p = new UserPitcher();
			p.setUserSeq(u);
			p.setPitcherSeq(Long.valueOf(Integer.toString(i)));
			p.setUserPitcherName(hitterRepository.findByHitterSeq(Long.valueOf(Integer.toString(i))).getHitterName());
			userPitcherRepository.save(p);
			em.clear();
		}
		TeamSetting t = new TeamSetting();
		t.setUserSeq(u);
		t.setTeamSetting1stSp(userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), Long.valueOf(1)).get());
		t.setTeamSetting2ndSp(userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), Long.valueOf(2)).get());
		t.setTeamSetting3rdSp(userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), Long.valueOf(3)).get());
		t.setTeamSetting4thSp(userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), Long.valueOf(4)).get());
		t.setTeamSetting5thSp(userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(u.getUserSeq(), Long.valueOf(5)).get());
		t.setTeamSettingNextSp(1);
		teamSettingRepository.save(t);
		em.clear();
	}


}
