package com.dgi.platform.service;

import com.dgi.platform.model.User;

public interface UserService {
	void save(User user);

	User findByUsername(String username);
}
