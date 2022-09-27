package com.ssafy.theground.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.theground.entity.User;
import com.ssafy.theground.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

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


}
