package com.dgi.platform;

import java.util.Random;
import java.util.Vector;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class BootstrapApp {
	public static void main(String[] args) {
		SpringApplication.run(BootstrapApp.class, args);
	}

	@PostConstruct
	private void init() throws Exception {
	}

}
