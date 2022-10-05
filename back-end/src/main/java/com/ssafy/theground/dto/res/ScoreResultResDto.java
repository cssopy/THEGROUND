package com.ssafy.theground.dto.res;

import lombok.Data;

@Data
public class ScoreResultResDto {
	private String homeTeamName;
	private String homeTeamLogoUrl;
	private String awayTeamName;
	private String awayTeamLogoUrl;
	
	private int scoreboard1stTop;
	private int scoreboard2ndTop;
	private int scoreboard3rdTop;
	private int scoreboard4thTop;
	private int scoreboard5thTop;
	private int scoreboard6thTop;
	private int scoreboard7thTop;
	private int scoreboard8thTop;
	private int scoreboard9thTop;
	private int scoreboardAwayScore;
	private int scoreboardAwayHit;
	private int scoreboardAwayWalk;
	private int scoreboardAwayHomerun;
	private int scoreboardAwayStrikeout;
	
	private int scoreboard1stBottom;
	private int scoreboard2ndBottom;
	private int scoreboard3rdBottom;
	private int scoreboard4thBottom;
	private int scoreboard5thBottom;
	private int scoreboard6thBottom;
	private int scoreboard7thBottom;
	private int scoreboard8thBottom;
	private int scoreboard9thBottom;
	private int scoreboardHomeScore;
	private int scoreboardHomeHit;
	private int scoreboardHomeWalk;
	private int scoreboardHomeHomerun;
	private int scoreboardHomeStrikeout;
}
