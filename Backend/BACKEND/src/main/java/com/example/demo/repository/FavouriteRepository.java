package com.example.demo.repository;

import com.example.demo.model.Favourite;
import com.example.demo.model.StoryModel;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FavouriteRepository extends JpaRepository<Favourite, Long>{

    List<Favourite> findByStorymodel(StoryModel storyModel);
    List<Favourite> findByUser(User user);

    boolean existsByStorymodel(StoryModel story);
    boolean existsByUser(User user);

}