package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.User;
import com.example.demo.model.enumerate.Role;
import lombok.Builder;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@Builder
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/getall")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> getUsers = userService.getAllUsers();
		return new ResponseEntity<>(getUsers, HttpStatus.OK);

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		boolean deleted = userService.deleteUserById(id);
		if (deleted) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/users/by-role/{role}")
	public ResponseEntity<List<User>> getUsersByRole(@PathVariable Role role) {
		List<User> users = userService.getUsersByRole(role);
		return new ResponseEntity<>(users, HttpStatus.OK);
	}



}

