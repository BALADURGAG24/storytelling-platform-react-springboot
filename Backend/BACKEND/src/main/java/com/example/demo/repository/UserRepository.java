package com.example.demo.repository;
import com.example.demo.model.User;
import com.example.demo.model.enumerate.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long>  {
    Optional<User> findByEmail(String username);
    List<User> findByRole(Role role);



}