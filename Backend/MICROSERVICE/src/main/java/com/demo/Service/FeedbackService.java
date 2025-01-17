package com.demo.service;

import com.demo.model.Feedback;
import com.demo.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public FeedbackService() {
        // Constructor injection
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback getFeedbackById(Long fid) {
        return feedbackRepository.findById(fid).orElse(null);
    }

    public boolean updateFeedback(Long fid, Feedback feedback) {
        if (feedbackRepository.existsById(fid)) {
            feedback.setFid(fid);
            feedbackRepository.save(feedback);
            return true;
        }
        return false;
    }


    public boolean deleteFeedback(Long fid) {
        if (feedbackRepository.existsById(fid)) {
            feedbackRepository.deleteById(fid);
            return true;
        }
        return false;
    }
}
