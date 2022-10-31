package com.dgi.platform.aop;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.dgi.platform.dto.ErrorCodeDto;
import com.dgi.platform.utils.GuavaCacheUtil;
import com.google.common.cache.Cache;
import com.google.gson.Gson;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
@Component
public class NoRepeatSubmitAop {

	private Cache<String, Integer> cache = GuavaCacheUtil.repeatSubmitCache;

	@Pointcut("@annotation(noRepeatSubmit)")
	public void pointCut(NoRepeatSubmit noRepeatSubmit) {
	}

	@Around("pointCut(noRepeatSubmit)")
	public Object arround(ProceedingJoinPoint pjp, NoRepeatSubmit noRepeatSubmit) {
		try {
			ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
					.getRequestAttributes();
			String sessionId = RequestContextHolder.getRequestAttributes().getSessionId();
			HttpServletRequest request = attributes.getRequest();
			String key = sessionId + "-" + request.getServletPath();
			if (cache.getIfPresent(key) == null) {// 如果cache中有這個url視為重複提交
				Object o = pjp.proceed();
				cache.put(key, 0);
				return o;
			} else {
				log.error("重複請求，請稍後在試!");
				return null;
			}
		} catch (Throwable e) {
			log.error("NoRepeatSubmitAop: get exception!!! \n\n" + e.getMessage());
			Object o = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			if (e.getMessage().contains("ErrorCode")) {
				ErrorCodeDto s = new Gson().fromJson(e.getMessage(), ErrorCodeDto.class);
				o = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(s);
			}
			return o;
		}
	}
}