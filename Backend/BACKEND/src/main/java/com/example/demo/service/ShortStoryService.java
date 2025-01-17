package com.example.demo.service;

import com.example.demo.model.ShortStory;
import com.example.demo.repository.ShortStoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShortStoryService {

    private final ShortStoryRepository shortStoryRepository;

    @Autowired
    public ShortStoryService(ShortStoryRepository shortStoryRepository) {
        this.shortStoryRepository = shortStoryRepository;
    }

    public List<ShortStory> getAllShortStories() {
        return shortStoryRepository.findAll();
    }

    public Optional<ShortStory> getShortStoryById(Long id) {
        return shortStoryRepository.findById(id);
    }

    public ShortStory createShortStory(ShortStory shortStory) {
        return shortStoryRepository.save(shortStory);
    }

    public ShortStory updateShortStory(Long id, ShortStory shortStory) {
        if (shortStoryRepository.existsById(id)) {
            shortStory.setShortstoryid(id);
            return shortStoryRepository.save(shortStory);
        }
        return null; // Handle the case where the ShortStory with the given ID doesn't exist
    }

    public void deleteShortStory(Long id) {
        shortStoryRepository.deleteById(id);
    }
}
