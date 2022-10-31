package com.dgi.platform.controller;

import java.util.Date;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dgi.platform.aop.NoRepeatSubmit;
import com.dgi.platform.dao.UserRepository;
import com.dgi.platform.dto.user.ReqUserLoginDto;
import com.dgi.platform.dto.user.ResUserInformationDto;
import com.dgi.platform.dto.user.ResUserLoginDto;
import com.dgi.platform.exception.ErrorMessages;
import com.dgi.platform.model.CustomUserBean;
import com.dgi.platform.model.User;
import com.dgi.platform.utils.BeanCopyUtil;
import com.dgi.platform.utils.EncryptionUtil;
import com.dgi.platform.utils.JwtTokenUtil;
import com.dgi.platform.utils.VerifyUtil;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@Api(tags = "使用者登入")
@RequestMapping("/user")
public class UserController {

	@Autowired
	EncryptionUtil encryptionUtil;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private VerifyUtil verifyUtil;

	/**
	 * 登入，取得token
	 */
	@PostMapping("/login")
	@NoRepeatSubmit()
	public ResponseEntity<?> userLogin(@Valid @RequestBody ReqUserLoginDto requestDto) throws Exception {
		log.info("login user:{}", requestDto.getUserNo());
		Map<Boolean, String> map = verifyUtil.checkVerify(requestDto.getCaptchaId(), requestDto.getCaptcha());
		if (!map.isEmpty()) {
			if (Boolean.FALSE.equals(map.keySet().toArray()[0])) {
				ErrorMessages.REQUEST_NOT_ACCEPTABLE.setErrorMessage(map.get(false));
				return new ResponseEntity<Object>(ErrorMessages.REQUEST_NOT_ACCEPTABLE.toObject(),
						HttpStatus.BAD_REQUEST);
			}
		}

		Optional<User> dbUserOptional = userRepository.findByUserNo(requestDto.getUserNo());
		if (dbUserOptional.isPresent()) {
			try {
				Authentication authentication = authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(requestDto.getUserNo(), requestDto.getUserPw()));

				SecurityContextHolder.getContext().setAuthentication(authentication);
				String token = jwtTokenUtil.generateJwtToken(authentication);
				User dbUser = dbUserOptional.get();
				dbUser.setLoginDatetime(new Date());
				userRepository.save(dbUser);

				ResUserLoginDto dto = new ResUserLoginDto();
				dto.setToken(token);
				dto.setStatus(true);

				return ResponseEntity.ok(dto);
			} catch (AuthenticationException failed) {
				// 授權失敗時，把 SecurityContextHolder Authentication DTO 清除
				SecurityContextHolder.clearContext();
			}
		}
		return new ResponseEntity<>(ErrorMessages.AUTHENTICATION_FAILED.toObject(), HttpStatus.UNAUTHORIZED);
	}

	/**
	 * 透過token 取得用戶信息
	 * 
	 */
	@PostMapping("/information")
	public ResponseEntity<?> getUserByToken() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		// 檢查是否有使用者登入
		if (auth == null) {
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}

		CustomUserBean userDetails = (CustomUserBean) auth.getPrincipal();
		ResUserInformationDto dto = new ResUserInformationDto();
		BeanCopyUtil.copyProperties(userDetails, dto);
		dto.setUserName(userDetails.getUsername());

		return ResponseEntity.ok(dto);
	}
}