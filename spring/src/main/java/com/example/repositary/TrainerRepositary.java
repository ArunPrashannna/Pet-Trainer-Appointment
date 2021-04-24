package com.example.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Trainer;

public interface TrainerRepositary extends JpaRepository<Trainer,Long>{

}
