package com.dgi.platform.config;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.Contact;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;

/**
 * Swagger 配置類
 *
 * @author brack
 * @date 2021/12/31
 */

@EnableOpenApi
@Configuration
public class SwaggerConfig {

	@Value(value = "${swagger.enabled}")
	Boolean swaggerEnabled;

	private static final Set<String> DEFAULT_PRODUCES_CONSUMES = new HashSet<String>(Arrays.asList("application/json"));

	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.OAS_30)
				.apiInfo(apiInfo())
				.produces(DEFAULT_PRODUCES_CONSUMES)
				.consumes(DEFAULT_PRODUCES_CONSUMES)
				.securityContexts(Arrays.asList(securityContext()))
				.securitySchemes(Arrays.asList(apiKey()))
				// 是否開啟swagger
				.enable(swaggerEnabled).select()
				// 過濾條件，掃描指定路徑下的檔案
				.apis(RequestHandlerSelectors.basePackage("com.dgi.platform.controller"))
				.paths(PathSelectors.any())
				.build().pathMapping("/");
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("A案")
				.description("api")
				.contact(new Contact("api", "", ""))
				.version("0.0.1")
				.build();
	}

	private ApiKey apiKey() {
		return new ApiKey("Authorization", "Authorization", "header");
	}

	private SecurityContext securityContext() {
		return SecurityContext.builder().securityReferences(defaultAuth()).build();
	}

	private List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		return Arrays.asList(new SecurityReference("Authorization", authorizationScopes));
	}
}