package com.dgi.platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DataErrorException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public DataErrorException() {	
	}
	
	public DataErrorException(String message) {
        super(message);
    }
}
