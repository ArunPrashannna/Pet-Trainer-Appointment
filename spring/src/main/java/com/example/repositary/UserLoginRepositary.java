package com.example.repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.UserLogin;

public interface UserLoginRepositary extends JpaRepository<UserLogin,Long>{

	Optional<UserLogin> findByUsername(String username);

}
