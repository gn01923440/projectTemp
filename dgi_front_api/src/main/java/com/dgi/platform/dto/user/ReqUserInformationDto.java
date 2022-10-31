package com.dgi.platform.dto.user;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class ReqUserInformationDto {
	@NotEmpty(message = "Token必填")
	String token;
}