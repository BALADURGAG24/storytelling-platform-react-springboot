package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {
    // You can add custom query methods here if needed
}
