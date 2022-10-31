package com.dgi.platform.config;


import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import com.dgi.platform.security.BaseCORSFilter;
import com.dgi.platform.security.XssStringJsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

/**
 * XssFilterConfig
 */
@Configuration
public class XssFilterConfig {
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Bean
    public FilterRegistrationBean xssFiltrRegister() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(new BaseCORSFilter());
        registration.addUrlPatterns("/*");
        registration.setName("XssFilter");
        registration.setOrder(1);
        return registration;
    }
	
	@Bean
    @Primary
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        SimpleModule module = new SimpleModule();
        module.addDeserializer(String.class, new XssStringJsonDeserializer());
        ObjectMapper objectMapper = Jackson2ObjectMapperBuilder.json().build();
        objectMapper.registerModule(module);
        return new MappingJackson2HttpMessageConverter(objectMapper);
    }
}
