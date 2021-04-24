package com.example.repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.SignUpUser;

public interface SignUpRepositary extends JpaRepository<SignUpUser,Long>{

	Optional<SignUpUser> findByEmail(String email);

}
