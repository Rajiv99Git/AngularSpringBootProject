package com.coforge.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.model.User;
import com.coforge.repository.UserRepo;

@RestController


@CrossOrigin(origins="http://localhost:4200")
public class UserController {


	 @Autowired
	 private UserRepo userrepo;
	 
	 @GetMapping("/login")
	 public String login()

	 {
		 return "welcome";
	 }
	 
	 
	 @PutMapping("/login")
	 public ResponseEntity<String> login(@RequestBody User user) {
		
		 User user1=userrepo.find(user.getEmail());
		 if(user1.getPassword().equals(user.getPassword()) && user1.getRole().equals("admin"))
		 {
			 return ResponseEntity.ok("welcome admin"); 
		 }
		 
		 return ResponseEntity.ok("welcome customer");
		 
		 
	 }

	 @GetMapping("/signup")
	 public String 	Signup() {
	 return "register yourself";
	 }
	 @PostMapping("/signup")
	 public ResponseEntity<String> createUser(@Valid @RequestBody User user) {
		
	   user.setRole("customer");
	   userrepo.save(user);
	  return ResponseEntity.ok("data saved successfully");
	 }

	 @PostMapping("/ADMIN")
	 public ResponseEntity<String> createAdmin(@RequestBody User user) {
		
	   user.setRole("admin");
	   userrepo.save(user);
	  return ResponseEntity.ok().body("data saved successfully");
	 }
	 @GetMapping("/home")
	 public User home() {

	 return null;
	 }
	 
}

