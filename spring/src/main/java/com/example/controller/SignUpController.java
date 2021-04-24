package com.example.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.SignUpUser;
import com.example.repositary.SignUpRepositary;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/user")
public class SignUpController {
	
	@Autowired
	private SignUpRepositary signUpRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/addUser")
	public String Role() {
		return "Working";
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/createUser")
	public SignUpUser createUser(@RequestBody SignUpUser user) {
		Optional<SignUpUser> s= signUpRepository.findByEmail(user.email);
		if(s.isEmpty()){
			System.out.println(s); 
			return signUpRepository.save(user);
		}
		else {
			return user;
		}
	}
}