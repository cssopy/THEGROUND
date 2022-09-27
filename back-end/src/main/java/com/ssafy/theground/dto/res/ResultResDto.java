package com.ssafy.theground.dto.res;

import lombok.Data;

@Data
public class ResultResDto {
	private String home;
	private String homeLogo;
	private String away;
	private String awayLogo;
	private int homeScore;
	private int awayScore;
	private String result;
}
