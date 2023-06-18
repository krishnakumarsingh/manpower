package com.innovixa.manpower.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "fireextinguisher")
public class FireExtinguisherTracker {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long slNo;
	@Column(nullable = false, unique = true)
	private String serialNo;
	@Column(nullable = false)
	private String assetNo;
	@Column(nullable = false)
	private String calibrationDate;
	@Column(nullable = false)
	private String calibartionDueDate;
	@Column(nullable = false)
	private String status;
	@Column(nullable = false)
	private String issuedTo;
	@Column(nullable = false)
	private String remarks;
	@Column(nullable = false)
	private String asOnDated;
	public Long getId() {
		return null;
	}
}