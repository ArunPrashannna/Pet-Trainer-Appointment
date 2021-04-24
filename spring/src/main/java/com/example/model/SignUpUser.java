package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Signup")
public class SignUpUser {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Long id;
	@Column(name="email")
	public String email;
	@Column(name="username")
	public String username;
	@Column(name="mobileno")
	public String mobileno;
	@Column(name="password")
	public String password;
	@Column(name="confirmpassword")
	public String comfirmpassword;
	@Column(name="role")
	public String role;
	
	public SignUpUser() {
		
	}
	
	public SignUpUser(Long id, String email, String username, String mobileno, String password, String comfirmpassword,
			String role) {
		super();
		this.id = id;
		this.email = email;
		this.username = username;
		this.mobileno = mobileno;
		this.password = password;
		this.comfirmpassword = comfirmpassword;
		this.role = role;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getComfirmpassword() {
		return comfirmpassword;
	}
	public void setComfirmpassword(String comfirmpassword) {
		this.comfirmpassword = comfirmpassword;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
