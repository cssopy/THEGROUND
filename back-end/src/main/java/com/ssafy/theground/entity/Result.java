package com.ssafy.theground.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="results")
@Data
public class Result {
	
	@Id
	@Column(name="match_seq")
	private Long matchSeq;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="match_seq")
	private Match match;
	
	@Column(name="result_user_score")
	private int resultUserScore;
	
	@Column(name="result_opponent_score")
	private int resultOpponentScore;
	
	@Column(name="result_outcome")
	private char resultOutcome;
	
	@ManyToOne
	@JoinColumn(name="result_win_pitcher", referencedColumnName="pitcher_seq")
	private Pitcher resultWinPitcher;
	
	@ManyToOne
	@JoinColumn(name="result_lose_pitcher", referencedColumnName="pitcher_seq")
	private Pitcher resultLosePitcher;
	
	
}	
