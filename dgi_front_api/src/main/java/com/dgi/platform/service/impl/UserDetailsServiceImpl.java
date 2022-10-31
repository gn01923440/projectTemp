package com.dgi.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Example;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dgi.platform.dao.UserRepository;
import com.dgi.platform.model.CustomUserBean;
import com.dgi.platform.model.User;

@Service("UserDetailsService")
@Primary
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public CustomUserBean loadUserByUsername(String userNo) throws UsernameNotFoundException {
		User u = new User();
		u.setUserNo(userNo);
		u.setStatus("1");
		Example<User> example = Example.of(u);
		User user = userRepository.findOne(example)
				.orElseThrow(() -> new UsernameNotFoundException("User with " + "userNo " + userNo + " not found"));
		return CustomUserBean.createInstance(user);
	}
}