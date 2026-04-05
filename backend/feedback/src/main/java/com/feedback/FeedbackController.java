package com.feedback;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*") // allows your frontend to call this API
public class FeedbackController {

    @PostMapping("/api/feedback")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        System.out.println("Feedback from: " + feedback.getName());
        // save to DB here if needed
        return ResponseEntity.ok("Feedback received!");
    }
}