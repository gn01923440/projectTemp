package com.dgi.platform.utils;

import java.util.Date;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.dgi.platform.model.CustomUserBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Component
public class JwtTokenUtil {

	@Value("${jwttoken.secret}")
	private String jwtTokenSecret;
	@Value("${jwttoken.expiration}")
	private long jwtTokenExpiration;
	@Value("${jwttoken.refreshExpiration}")
	public long jwtRefeshTokenExpiration;

	public String generateJwtToken(Authentication authentication) {
		CustomUserBean userPrincipal = (CustomUserBean) authentication.getPrincipal();
		return Jwts.builder().setSubject(userPrincipal.getUserNo()).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + jwtTokenExpiration))
				.signWith(SignatureAlgorithm.HS512, jwtTokenSecret).compact();

	}

	public String generateRefreshJwtToken(Authentication authentication) {
		// CustomUserBean userPrincipal = (CustomUserBean)
		// authentication.getPrincipal();
		// return Jwts.builder().setSubject(userPrincipal.getUsername()).setIssuedAt(new
		// Date(System.currentTimeMillis())).setExpiration(new
		// Date(System.currentTimeMillis() +
		// jwtTokenExpiration)).signWith(SignatureAlgorithm.HS512,
		// jwtTokenSecret).compact();
		org.springframework.security.core.userdetails.User user = (User) authentication.getPrincipal();
		return this.generateRefreshToken(user.getUsername());
	}

	/**
	 * generate refreshToken
	 * 
	 * @param token
	 * @return
	 */
	public String refreshToken(String token) {
		String refreshedToken;
		try {
			Jwts.parser().setSigningKey(jwtTokenSecret).parseClaimsJws(token).getBody();
			refreshedToken = this.generateToken(getUserNameFromJwtToken(token));
		} catch (Exception e) {
			refreshedToken = null;
		}
		return refreshedToken;
	}

	/**
	 * canTokenBeRefreshed
	 * 
	 * @param token
	 * @param lastPasswordReset
	 * @return
	 */
	public Boolean canTokenBeRefreshed(String token, Date lastPasswordReset) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(jwtTokenSecret).parseClaimsJws(token).getBody();
			final Date iat = claims.getIssuedAt();
			final Date exp = claims.getExpiration();
			if (iat.before(lastPasswordReset) || exp.before(new Date(System.currentTimeMillis()))) {
				return false;
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * generateToken
	 * 
	 * @param userId
	 * @return
	 */
	private String generateToken(String userId) {
		return Jwts.builder().setSubject(userId) // user id
				.setIssuedAt(new Date(System.currentTimeMillis())) // token create time
				.setExpiration(new Date(System.currentTimeMillis() + jwtTokenExpiration)) // token expire time
				.signWith(SignatureAlgorithm.HS512, jwtTokenSecret).compact();
	}

	/**
	 * generateRefreshToken
	 * 
	 * @param claims
	 * @param subject
	 * @return
	 */
	public String generateRefreshToken(String userId) {
		return Jwts.builder().setSubject(userId) // user id
				.setIssuedAt(new Date(System.currentTimeMillis())) // token create time
				.setExpiration(new Date(System.currentTimeMillis() + jwtRefeshTokenExpiration)) // token expire time
				.signWith(SignatureAlgorithm.HS512, jwtTokenSecret).compact();

	}

	public boolean validateJwtToken(String token, CustomUserBean userDetails) {
		final String username = getUserNameFromJwtToken(token);
		return (username.equals(userDetails.getUserNo()) && !isTokenExpired(token));
	}

	public String getUserNameFromJwtToken(String token) {
		Claims claims = Jwts.parser().setSigningKey(jwtTokenSecret).parseClaimsJws(token).getBody();
		return claims.getSubject();

	}

	public boolean validateToken(String token, UserDetails userDetails) {
		final String username = getUserNameFromJwtToken(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}

	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResovler) {
		final Claims claims = extractAllClaims(token);
		return claimsResovler.apply(claims);
	}

	public Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(jwtTokenSecret).parseClaimsJws(token).getBody();
	}

}
