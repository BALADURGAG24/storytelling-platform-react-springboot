package com.demo.controller;

import com.demo.model.Feedback;
import com.demo.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/feed")
public class FeedbackController {

    @Autowired
    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/getall")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @PostMapping("/createfeedback")
    public ResponseEntity<String> createFeedback(@RequestBody Feedback feedback) {
        Feedback createdFeedback = feedbackService.createFeedback(feedback);
        if (createdFeedback != null) {
            return new ResponseEntity<>("Feedback created", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to create feedback", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{fid}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long fid) {
        Feedback feedback = feedbackService.getFeedbackById(fid);
        if (feedback != null) {
            return new ResponseEntity<>(feedback, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        if (feedbackService.updateFeedback(id, feedback)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long id) {
        if (feedbackService.deleteFeedback(id)) {
            return new ResponseEntity<>("Feedback deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Feedback not found", HttpStatus.NOT_FOUND);
        }
    }
}
