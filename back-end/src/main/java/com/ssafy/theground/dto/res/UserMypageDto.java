package com.ssafy.theground.dto.res;

import com.ssafy.theground.entity.User;

import lombok.Data;

@Data
public class UserMypageDto {
	private String logoUrl;
	private String userTeamname;
	private int userExp;
	private int userLevel;
	private int userWin;
	private int userLose;
	private int userDraw;
	private int userPayroll;
	private Boolean userInPlayFlag;
	
	public UserMypageDto(User u) {
		this.logoUrl=u.getLogo().getLogoUrl();
		this.userTeamname=u.getUserTeamname();
		this.userExp=u.getUserExp();
		this.userLevel=u.getUserLevel();
		this.userWin=u.getUserWin();
		this.userLose=u.getUserLose();
		this.userDraw=u.getUserDraw();
		this.userInPlayFlag=u.getUserInPlayFlag();
		this.userPayroll=u.getUserPayroll();
	}
}
