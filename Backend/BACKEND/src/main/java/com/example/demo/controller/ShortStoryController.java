package com.example.demo.controller;

import com.example.demo.model.ShortStory;
import com.example.demo.service.ShortStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shortstories")
public class ShortStoryController {

    private final ShortStoryService shortStoryService;

    @Autowired
    public ShortStoryController(ShortStoryService shortStoryService) {
        this.shortStoryService = shortStoryService;
    }

    @GetMapping
    public List<ShortStory> getAllShortStories() {
        return shortStoryService.getAllShortStories();
    }

    @GetMapping("/{id}")
    public Optional<ShortStory> getShortStoryById(@PathVariable Long id) {
        return shortStoryService.getShortStoryById(id);
    }

    @PostMapping
    public ShortStory createShortStory(@RequestBody ShortStory shortStory) {
        return shortStoryService.createShortStory(shortStory);
    }

    @PutMapping("/{id}")
    public ShortStory updateShortStory(@PathVariable Long id, @RequestBody ShortStory shortStory) {
        return shortStoryService.updateShortStory(id, shortStory);
    }

    @DeleteMapping("/{id}")
    public void deleteShortStory(@PathVariable Long id) {
        shortStoryService.deleteShortStory(id);
    }
}
