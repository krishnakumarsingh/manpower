package com.innovixa.manpower.service.impl;

import lombok.AllArgsConstructor;
import com.innovixa.manpower.entity.FireExtinguisherTracker;
import com.innovixa.manpower.repository.FireExtinguisherTrackerRepository;
import com.innovixa.manpower.service.FireExtinguisherTrackerService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FireExtinguisherTrackerServiceImpl implements FireExtinguisherTrackerService {

    private FireExtinguisherTrackerRepository fireExtinguisherTrackerRepository;

    @Override
    public FireExtinguisherTracker createUser(FireExtinguisherTracker fireExtinguisherTracker) {
        return fireExtinguisherTrackerRepository.save(fireExtinguisherTracker);
    }

    @Override
    public FireExtinguisherTracker getUserById(Long userId) {
        Optional<FireExtinguisherTracker> optionalUser = fireExtinguisherTrackerRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<FireExtinguisherTracker> getAllUsers() {
        return fireExtinguisherTrackerRepository.findAll();
    }

    @Override
    public FireExtinguisherTracker updateUser(FireExtinguisherTracker fireExtinguisherTracker) {
    	FireExtinguisherTracker existingUser = fireExtinguisherTrackerRepository.findById(fireExtinguisherTracker.getId()).get();
        existingUser.setFirstName(fireExtinguisherTracker.getFirstName());
        existingUser.setLastName(fireExtinguisherTracker.getLastName());
        existingUser.setEmail(fireExtinguisherTracker.getEmail());
        FireExtinguisherTracker updatedUser = fireExtinguisherTrackerRepository.save(existingUser);
        return updatedUser;
    }

    @Override
    public void deleteUser(Long userId) {
    	fireExtinguisherTrackerRepository.deleteById(userId);
    }
}