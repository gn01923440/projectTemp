package com.dgi.platform.dto.user;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class ReqUserLoginDto {
	@NotEmpty(message = "帳號必填")
	String userNo;
	@NotEmpty(message = "密碼必填")
	String userPw;
	@NotEmpty(message = "識別驗證碼必填")
	String captchaId;
	@NotEmpty(message = "驗證碼必填")
	String captcha;
}