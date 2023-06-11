package com.innovixa.manpower.service;

import com.innovixa.manpower.entity.FireExtinguisherTracker;
import java.util.List;

public interface FireExtinguisherTrackerService {
	FireExtinguisherTracker createUser(FireExtinguisherTracker fireExtinguisherTracker);

	FireExtinguisherTracker getUserById(Long userId);

    List<FireExtinguisherTracker> getAllUsers();

    FireExtinguisherTracker updateUser(FireExtinguisherTracker fireExtinguisherTracker);

    void deleteUser(Long userId);
}
