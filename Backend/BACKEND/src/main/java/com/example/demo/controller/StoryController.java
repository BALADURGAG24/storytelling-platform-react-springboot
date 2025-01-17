package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.StoryModel;
import com.example.demo.service.StoryService;


@RestController
@RequestMapping("/api/story")
@CrossOrigin(origins = "http://localhost:3000")
public class StoryController {
    @Autowired
    private StoryService storyService;

    @PostMapping("/createstory")
    public ResponseEntity<String> createStory(@RequestBody StoryModel storyModel) {
        storyModel.setContent(storyModel.getContent());
        storyService.createStory(storyModel);
        return new ResponseEntity<>( "story created",HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<StoryModel>> getAllStories() {
        List<StoryModel> getStories = storyService.getAllStories();
        return new ResponseEntity<>(getStories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StoryModel> getStoriesById(@PathVariable long id) {
        Optional<StoryModel> storyModel = storyService.getStoriesById(id);
        return storyModel.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byGenre/{genre}")
    public ResponseEntity<List<StoryModel>> getStoriesByGenre(@PathVariable String genre) {
        List<StoryModel> stories = storyService.getStoriesByGenre(genre);
        if (stories.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(stories);
    }

    @GetMapping("/byAuthor/{author}")
    public ResponseEntity<List<StoryModel>> getStoriesByAuthor(@PathVariable String author) {
        List<StoryModel> stories = storyService.getStoriesByAuthor(author);
        if (stories.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(stories);
    }

    @GetMapping("/byUser/{uid}")
    public ResponseEntity<List<StoryModel>> getStoriesByUser(@PathVariable Long uid) {
        List<StoryModel> stories = storyService.getStoriesByUser(uid);
        if (stories.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(stories);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<StoryModel> updateStory(@PathVariable Long id, @RequestBody StoryModel storyModel) {
        Optional<StoryModel> existingStory = storyService.getStoriesById(id);
        if (existingStory.isPresent()) {
            storyModel.setStoryid(id);
            StoryModel updatedStory = storyService.updateStory(storyModel);
            return new ResponseEntity<>(updatedStory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStoryById(@PathVariable Long id) {
        Optional<StoryModel> existingStory = storyService.getStoriesById(id);
        if (existingStory.isPresent()) {
            storyService.deleteStoryById(id);
            return new ResponseEntity<>("Story deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Story not found", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/{storyId}/like")
    public void likeStory(@PathVariable Long storyId) {
        storyService.likeStory(storyId);
    }

    @PostMapping("/{storyId}/dislike")
    public void dislikeStory(@PathVariable Long storyId) {
        storyService.dislikeStory(storyId);
    }

    @PostMapping("/{storyId}/rate")
    public void rateStory(@PathVariable Long storyId, @RequestParam double rating) {
        storyService.rateStory(storyId, rating);
    }

}
