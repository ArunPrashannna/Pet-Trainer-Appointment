package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="UserLogin")
public class UserLogin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Long id;
	@Column(name="username")
	public String username;
	@Column(name="password")
	public String password;
	@Column(name="active")
	public boolean active;
	@Column(name="role")
	public String role;
	
	UserLogin(){
	}

	public UserLogin(Long id, String username, String password, String role) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
	}
	
	
	
}
