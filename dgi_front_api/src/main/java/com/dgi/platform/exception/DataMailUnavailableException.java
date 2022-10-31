package com.dgi.platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FAILED_DEPENDENCY)
public class DataMailUnavailableException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DataMailUnavailableException() {
	}

	public DataMailUnavailableException(String message) {
		super(message);
	}
}