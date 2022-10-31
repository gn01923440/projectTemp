package com.dgi.platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.TOO_MANY_REQUESTS)
public class DataRequestManyException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public DataRequestManyException() {	
	}
	
	public DataRequestManyException(String message) {
        super(message);
    }
}
