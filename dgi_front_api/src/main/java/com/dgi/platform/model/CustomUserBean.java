package com.dgi.platform.model;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class CustomUserBean implements UserDetails {
	private static final long serialVersionUID = -4709084843450077569L;
	private String id;
	private String userName;
	private String email;
	private String userNo;

	@JsonIgnore
	private String password;
	private Collection<? extends GrantedAuthority> authorities;

	CustomUserBean(String id, String userNo, String userName, String email, String password, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.userNo = userNo;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}

	public static CustomUserBean createInstance(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getRoleName().name())).collect(Collectors.toList());
		authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		return new CustomUserBean(user.getId(), user.getUserNo(), user.getUserName(), user.getEmail(), user.getUserPw(), authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return userName;
	}

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getUserNo() {
		return userNo;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object rhs) {
		if (rhs instanceof CustomUserBean) {
			return userName.equals(((CustomUserBean) rhs).userName);
		}
		return false;
	}

	@Override
	public int hashCode() {
		return userName.hashCode();
	}
}
