package com.coforge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.coforge")
@EntityScan(basePackages={"com.coforge.model"})
public class BusTicketingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusTicketingApplication.class, args);
	}

}
