package com.ssafy.theground.service;

import java.util.Optional;

import com.ssafy.theground.entity.User;

public interface UserService {
	
	public Optional<User> findByUserUid(String useruid);

	public void deleteByUserUid(String useruid);

	public User save(User user);

	public void updateById(String useruid, User user);

	public Long count();
}