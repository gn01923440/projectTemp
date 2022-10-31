package com.dgi.platform.exception;

import java.io.IOException;
import java.text.ParseException;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.persistence.NonUniqueResultException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler {
	// 自定義Exception
	@ExceptionHandler(DataNotFoundException.class)
	protected ResponseEntity<Object> handleDataNotFound(DataNotFoundException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RESOURCE_NOT_FOUND.toObject());
	}

	// 系統Exception
	@ExceptionHandler(EntityNotFoundException.class)
	protected ResponseEntity<Object> handleEntityNotFound(EntityNotFoundException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RESOURCE_NOT_FOUND.toObject());
	}

	@ExceptionHandler(javassist.NotFoundException.class)
	protected ResponseEntity<Object> handleNotFound(javassist.NotFoundException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RESOURCE_NOT_FOUND.toObject());
	}

	@ExceptionHandler(EmptyResultDataAccessException.class)
	protected ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RELATION_DATA_NOT_EXIST.toObject());
	}

	@ExceptionHandler(ParseException.class)
	protected ResponseEntity<Object> handleParseException(ParseException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.REQUEST_PARSE_DATA_ERROR.toObject());
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	protected ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
		String duplicateKeyMessage = "insert duplicate key";
		String conflictedForeignKey = "INSERT statement conflicted with the FOREIGN KEY constraint";
		String message = ex.getCause().getCause().getMessage();
		if (message.contains(conflictedForeignKey)) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(ErrorMessages.COULD_NOT_CREATE_REQUEST.toObject());
		}
		if (message.contains(duplicateKeyMessage)) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RECORD_ALREADY_EXISTS.toObject());
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.COULD_NOT_UPDATE_RESOURCE.toObject());
	}

	@ExceptionHandler(DuplicateKeyException.class)
	protected ResponseEntity<Object> handleDuplicateKeyException(DuplicateKeyException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RECORD_ALREADY_EXISTS.toObject());
	}

	@ExceptionHandler(NullPointerException.class)
	protected ResponseEntity<Object> handleNullPointerException(NullPointerException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.NULL_POINTER_EXCEPTION.toObject());
	}

	@ExceptionHandler(NonUniqueResultException.class)
	protected ResponseEntity<Object> handleNonUniqueResultException(NonUniqueResultException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RECORD_ALREADY_EXISTS.toObject());
	}

//	@ExceptionHandler(Exception.class)
//	protected ResponseEntity<Object> handleServerException(Exception exception, HttpServletRequest request,
//			HttpServletResponse response) {
//		String commaSeparateFailed = "was expecting comma to separate Array entries";
//		String message = exception.getCause().getCause().getMessage();
//		if (message.contains(commaSeparateFailed)) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//					.body(ErrorMessages.REQUEST_PARSE_DATA_ERROR.toObject());
//		}
//		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.INTERNAL_SERVER_ERROR.toObject());
//	}

	@ExceptionHandler(MaxUploadSizeExceededException.class)
	protected ResponseEntity<Object> handleMaxUploadSizeException(MaxUploadSizeExceededException exception,
			HttpServletRequest request, HttpServletResponse response) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(ErrorMessages.REQUEST_MAX_UPLOAD_SIZE_EXCEED.toObject());
	}

	@ExceptionHandler(IOException.class)
	protected ResponseEntity<Object> handleIOException(IOException ioException) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorMessages.RESOURCE_NOT_FOUND.toObject());
	}

	@ExceptionHandler(value = MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
		BindingResult bindingResult = ex.getBindingResult();
		Map<String, Set<String>> fieldErrorWithMessages = bindingResult.getFieldErrors().stream()
				.collect(Collectors.groupingBy(FieldError::getField,
						Collectors.mapping(DefaultMessageSourceResolvable::getDefaultMessage, Collectors.toSet())));
		Object errorMessage = ErrorMessages.INVALID_FIELDS_REQUEST.toObjectByDetail(fieldErrorWithMessages);

		return ResponseEntity.badRequest().body(errorMessage);
	}
}