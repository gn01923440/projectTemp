package com.dgi.platform.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.dgi.platform.security.UserLoggingFilter;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	private UserLoggingFilter userLoggingFilter;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(userLoggingFilter);
	}

	@Bean(name = "multipartResolver")
	public MultipartResolver multipartResolver() {
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
		return multipartResolver;
	}

	@Override
	public void configurePathMatch(PathMatchConfigurer configurer) {

	}

	@Override
	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {

	}
}
