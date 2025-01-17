package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StoryModel;
import com.example.demo.repository.StoryRepository;

@Service
public class StoryService {
    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private UserService userService;

    public List<StoryModel> getAllStories() {
        return storyRepository.findAll();
    }

    public void createStory(StoryModel storyModel) {

        storyRepository.save(storyModel);
    }

    public Optional<StoryModel> getStoriesById(Long storyId) {
        return storyRepository.findById(storyId);
    }

    public List<StoryModel> getStoriesByGenre(String genre) {
        return storyRepository.findByGenre(genre);
    }

    public List<StoryModel> getStoriesByAuthor(String author) {
        return storyRepository.findByAuthor(author);
    }

    public List<StoryModel> getStoriesByUser(Long uid) {
        return storyRepository.findByUser(userService.getUserById(uid).get());
    }
    public StoryModel updateStory(StoryModel storyModel) {
        return storyRepository.save(storyModel);
    }

    public void deleteStoryById(Long storyId) {
        storyRepository.deleteById(storyId);
    }

    public void reviewStory(Long storyId) {

    }

    public void likeStory(Long storyId) {
        StoryModel story = storyRepository.findById(storyId).orElse(null);
        if (story != null) {
            story.setLikeCount(story.getLikeCount() + 1);
            storyRepository.save(story);
        }
    }

    public void dislikeStory(Long storyId) {
        StoryModel story = storyRepository.findById(storyId).orElse(null);
        if (story != null) {
            story.setDislikeCount(story.getDislikeCount() + 1);
            storyRepository.save(story);
        }
    }

    public void rateStory(Long storyId, double rating) {
        StoryModel story = storyRepository.findById(storyId).orElse(null);
        if (story != null) {
            double newAverageRating = (story.getAverageRating() + rating) / 2;
            story.setAverageRating(newAverageRating);
            storyRepository.save(story);
        }
    }







}
