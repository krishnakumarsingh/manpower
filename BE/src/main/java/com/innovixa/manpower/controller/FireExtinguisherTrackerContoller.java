package com.innovixa.manpower.controller;

import lombok.AllArgsConstructor;
import com.innovixa.manpower.entity.FireExtinguisherTracker;
import com.innovixa.manpower.service.FireExtinguisherTrackerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class FireExtinguisherTrackerContoller {

    private FireExtinguisherTrackerService fireExtinguisherTrackerService;

    // build create User REST API
    @PostMapping("/fireextinguishertracker")
    public ResponseEntity<FireExtinguisherTracker> createUser(@RequestBody FireExtinguisherTracker fireExtinguisherTracker){
    	FireExtinguisherTracker savedUser = fireExtinguisherTrackerService.createUser(fireExtinguisherTracker);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // build get user by id REST API
    // http://localhost:8080/api/users/1
    @GetMapping("{id}")
    public ResponseEntity<FireExtinguisherTracker> getUserById(@PathVariable("id") Long userId){
    	FireExtinguisherTracker fireExtinguisherTracker = fireExtinguisherTrackerService.getUserById(userId);
        return new ResponseEntity<>(fireExtinguisherTracker, HttpStatus.OK);
    }

    // Build Get All Users REST API
    // http://localhost:8080/api/users
    @GetMapping("/fireextinguishertracker")
    public ResponseEntity<List<FireExtinguisherTracker>> getAllUsers(){
        List<FireExtinguisherTracker> fireExtinguisherTrackers = fireExtinguisherTrackerService.getAllUsers();
        return new ResponseEntity<>(fireExtinguisherTrackers, HttpStatus.OK);
    }

    // Build Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/users/1
    public ResponseEntity<FireExtinguisherTracker> updateUser(@PathVariable("id") Long userId,
                                           @RequestBody FireExtinguisherTracker fireExtinguisherTracker){
    	fireExtinguisherTracker.setId(userId);
    	FireExtinguisherTracker updatedUser = fireExtinguisherTrackerService.updateUser(fireExtinguisherTracker);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    // Build Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
    	fireExtinguisherTrackerService.deleteUser(userId);
        return new ResponseEntity<>("Data successfully deleted!", HttpStatus.OK);
    }
}