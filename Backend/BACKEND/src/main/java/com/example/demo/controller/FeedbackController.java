package com.example.demo.controller;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/feed")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/createfeedback")
    public String createFeedback(@RequestBody Feedback feedback) {
        feedbackService.createFeedback(feedback);
        return "feedback created";
    }

    @GetMapping("/get")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> getFeedbacks = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(getFeedbacks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbacksById(@PathVariable long id) {
        Optional<Feedback> feedback = feedbackService.getFeedbacksById(id);
        return feedback.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        Optional<Feedback> existingFeedback = feedbackService.getFeedbacksById(id);
        if (existingFeedback.isPresent()) {
            feedback.setFid(id);
            Feedback updatedFeedback= feedbackService.updateFeedback(feedback);
            return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        Optional<Feedback> feedback = feedbackService.getFeedbacksById(id);
        if (feedback.isPresent()) {
            feedbackService.deleteFeedback(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
