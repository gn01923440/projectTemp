package com.dgi.platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class DataNotAcceptableException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public DataNotAcceptableException() {	
	}
	
	public DataNotAcceptableException(String message) {
        super(message);
    }
}
