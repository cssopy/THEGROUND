package com.ssafy.theground.entity;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "TeamSetting")
public class User {
	
	@Id
	@Column(name="user_seq")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	@Column(name="user_in_play_flag")
	private Boolean userInPlayFlag;
	
	@Column(name="user_win")
	private int userWin;
	
	@Column(name="user_draw")
	private int userDraw;
	
	@Column(name="user_lose")
	private int userLose;

	@OneToOne(mappedBy = "userSeq")
	private TeamSetting teamSetting;
}
