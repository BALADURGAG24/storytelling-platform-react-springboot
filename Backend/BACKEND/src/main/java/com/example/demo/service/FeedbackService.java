package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    @Autowired

    private FeedbackRepository feedbackRepository;
    public List<Feedback> getAllFeedbacks()
    {
        return  feedbackRepository.findAll();
    }
    public void createFeedback(Feedback feedback)
    {
        feedbackRepository.save(feedback);
    }
    public Optional<Feedback> getFeedbacksById(Long fid)
    {
        return  feedbackRepository.findById(fid);
    }
    public Feedback updateFeedback(Feedback feedback)
    {
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(Long fid) {
        feedbackRepository.deleteById(fid);
    }
}
