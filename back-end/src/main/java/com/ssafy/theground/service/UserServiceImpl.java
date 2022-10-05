package com.ssafy.theground.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.entity.User;
import com.ssafy.theground.entity.UserHitter;
import com.ssafy.theground.entity.UserPitcher;
import com.ssafy.theground.repository.HitterRepository;
import com.ssafy.theground.repository.PitcherRepository;
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
		for(int i=1;i<=9;i++) {
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
		for(int i=1;i<=5;i++) {
			UserPitcher p = new UserPitcher();
			p.setUserSeq(u);
			p.setPitcherSeq(Long.valueOf(Integer.toString(i)));
			p.setUserPitcherName(hitterRepository.findByHitterSeq(Long.valueOf(Integer.toString(i))).getHitterName());
			userPitcherRepository.save(p);
			em.clear();
		}
	}


}
