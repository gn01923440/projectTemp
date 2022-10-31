package com.dgi.platform.security;

import java.time.Duration;
import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.dgi.platform.exception.DataRequestManyException;
import com.dgi.platform.utils.GuavaCacheUtil;
import com.dgi.platform.utils.HttpRequestResponseUtil;
import com.google.common.cache.Cache;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class UserLoggingFilter implements HandlerInterceptor {

	private final Cache<String, Bucket> cache = GuavaCacheUtil.ddosCache;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		final String ip = HttpRequestResponseUtil.getClientIpAddress();
		final String user = HttpRequestResponseUtil.getLoggedInUser();
		final String url = HttpRequestResponseUtil.getRequestUrl();
//		final String page = HttpRequestResponseUtils.getRequestUri();
//		final String refererPage = HttpRequestResponseUtils.getRefererPage();
		final String queryString = HttpRequestResponseUtil.getPageQueryString();
//		final String formString = HttpRequestResponseUtils.getPageFormString();
		final String userAgent = HttpRequestResponseUtil.getUserAgent();
		final String requestMethod = HttpRequestResponseUtil.getRequestMethod();
		final LocalDateTime timestamp = LocalDateTime.now();
		log.info("---------------User execute logging-------------------");
		updateCache(ip);
		log.info("ip : " + ip);
		log.info("user : " + user);
		log.info("requestMethod : " + requestMethod);
		log.info("url:" + url);
//		log.info("page:"+page);
//		log.info("refererPage:"+refererPage);
		log.info("queryString : " + queryString);
		// log.info("formString : "+formString);
		log.info("userAgent : " + userAgent);
		log.info("timestamp : " + timestamp);
		log.info("---------------User execute logging-------------------");
//		Visitor visitor = new Visitor();
//		visitor.setUser(HttpRequestResponseUtils.getLoggedInUser());
//		visitor.setIp(ip);
//		visitor.setMethod(requestMethod);
//		visitor.setUrl(url);
//		visitor.setPage(page);
//		visitor.setQueryString(queryString);
//		visitor.setRefererPage(refererPage);
//		visitor.setUserAgent(userAgent);
//		visitor.setLoggedTime(timestamp);
//		visitor.setUniqueVisit(true);
//
//		visitorService.saveVisitorInfo(visitor);
		if (!isRequestRateOk(ip)) {
            throw new DataRequestManyException("Too many requests");
		}

		
		return true;
	}

	private void updateCache(String IPAddress) {
		// 每分鐘100請求，每分鐘填充100個token
		if(!cache.asMap().containsKey(IPAddress)) {
			cache.put(IPAddress, Bucket.builder().addLimit(Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1)))).build());
		}
	}

	private boolean isRequestRateOk(String IPAddress) {
		return cache.asMap().get(IPAddress).tryConsume(1);
	}

}
