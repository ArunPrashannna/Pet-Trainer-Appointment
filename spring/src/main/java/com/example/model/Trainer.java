package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trainer")
public class Trainer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Long id;
	@Column(name="name")
	public String name;
	@Column
	public String email;
	@Column(name="mobileno")
	public String mobileno;
	@Column(name="experience")
	public int experience;
	@Column(name="dob")
	public String dob;
	@Column(name="age")
	public int age;
	@Column(name="password")
	public String password;
	
	public Trainer(){
		
	}
	
	public Trainer(Long id,String name, String email, String mobileno, int experience, String dob, int age, String password) {
		super();
		this.id=id;
		this.name = name;
		this.email = email;
		this.mobileno = mobileno;
		this.experience = experience;
		this.dob = dob;
		this.age = age;
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
