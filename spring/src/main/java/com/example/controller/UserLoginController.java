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
import com.example.model.UserLogin;
import com.example.repositary.UserLoginRepositary;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/userLogin")
public class UserLoginController {
	
	@Autowired
	private UserLoginRepositary userLoginRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getUser")
	public String Role() {
		return "Working";
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/createLogin")
	public UserLogin createUser(@RequestBody UserLogin userLogin) {
		Optional<UserLogin> s= userLoginRepository.findByUsername(userLogin.username);
		if(s.isEmpty()){
			System.out.println(s); 
			return userLoginRepository.save(userLogin);
		}
		else {
			return userLogin;
		}	
	}
}

