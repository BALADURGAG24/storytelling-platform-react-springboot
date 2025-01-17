package com.example.demo.repository;

import com.example.demo.model.ShortStory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortStoryRepository extends JpaRepository<ShortStory, Long> {
    // You can add custom query methods here if needed
}
