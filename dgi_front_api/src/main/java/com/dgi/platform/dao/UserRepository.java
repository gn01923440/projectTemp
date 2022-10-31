package com.dgi.platform.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dgi.platform.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	Optional<User> findByUserNo(String userNo);
}