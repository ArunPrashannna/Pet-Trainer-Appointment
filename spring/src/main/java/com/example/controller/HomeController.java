package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.model.Trainer;
import com.example.repositary.TrainerRepositary;

@RestController
@RequestMapping("/api/trainer")
public class HomeController {
	
	@Autowired
	private TrainerRepositary trainerRepositary;
	
	@GetMapping("/addTrainer")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Trainer> getAllEmployees() {
		return trainerRepositary.findAll();	
	}
	
	@PostMapping("/createTrainer")
	@CrossOrigin(origins = "http://localhost:4200")
	public Trainer createTrainer(@RequestBody Trainer trainer) {
		return trainerRepositary.save(trainer);
		
	}
}