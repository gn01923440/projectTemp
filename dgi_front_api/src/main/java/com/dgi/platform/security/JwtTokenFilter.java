package com.dgi.platform.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.dgi.platform.model.CustomUserBean;
import com.dgi.platform.service.impl.UserDetailsServiceImpl;
import com.dgi.platform.utils.JwtTokenUtil;

public class JwtTokenFilter extends OncePerRequestFilter {
	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		try {
			final String authorizationHeader = request.getHeader("Authorization");
			
			String userNo = null;
			String jwt = null;
			
			if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
				jwt = authorizationHeader.substring(7);
				userNo = jwtTokenUtil.getUserNameFromJwtToken(jwt);
			}
			
			if (userNo != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				CustomUserBean userDetails = this.userDetailsService.loadUserByUsername(userNo);
				
				if (jwtTokenUtil.validateJwtToken(jwt, userDetails)) {
					UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null , userDetails.getAuthorities());
					usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
				}
			}			
		} catch (Exception e) {
			// logger.error("Cannot set user authentication: {}", e);
			throw new RuntimeException("JwtToken error" + e.getMessage());
		}
		RepeatableRequestWrapper wrappedRequest = new RepeatableRequestWrapper(request);

		filterChain.doFilter(wrappedRequest, response);
	}

}
