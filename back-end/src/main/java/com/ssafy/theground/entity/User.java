package com.ssafy.theground.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="users")
@AllArgsConstructor
@Getter
@Setter
public class User {
	
	@Id
	@Column(name="user_seq")
	private Long userSeq;
	
	@Column(name="user_logintype")
	private char userLogintype;
	
	@Column(name="user_uid")
	private String userUid;
	
	@Column(name="user_teamname")
	private String userTeamname;
	
	@Column(name="user_level")
	private int userLevel;
	
	@Column(name="user_exp")
	private int userExp;
	
	@ManyToOne
	@JoinColumn(name="logo_seq", referencedColumnName="logo_seq")
	private Logo logo;
	
	@Column(name="user_payroll")
	private int userPayroll;
	
	@Column(name="in_play_yn")
	private Boolean inPlayYn;
}
