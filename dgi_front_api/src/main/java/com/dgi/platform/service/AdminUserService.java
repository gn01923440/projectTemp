package com.dgi.platform.service;

import java.security.NoSuchAlgorithmException;

import javax.mail.internet.AddressException;

import com.dgi.platform.model.User;

public interface AdminUserService {
	
	User insert(User mem);
	
	boolean update(User mem);
	
	boolean delete(String id);
	
	void resetPass(String memId) throws NoSuchAlgorithmException, AddressException;

	User findByUserNo(String userNo);
}
