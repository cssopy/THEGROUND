package com.ssafy.theground.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.ssafy.theground.entity.User;
import com.ssafy.theground.repository.UserRepository;

public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public Optional<User> findByUserUid(String useruid) {
		// TODO Auto-generated method stub
		return userRepository.findByUserUid(useruid);
	}

	@Override
	public void deleteByUserUid(String useruid) {
		userRepository.deleteByUserUid(useruid);
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


}
