package com.ssafy.theground.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="match_settings")
public class MatchSetting implements Serializable {

	@Id
	@Column(name="match_seq")
	private Long matchSeq;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="match_seq")
	private Match match;
	
	
	@OneToOne
	@JoinColumn(name="match_setting_pitcher",referencedColumnName="user_pitcher_seq")
	private UserPitcher matchSettingPitcher;
	
	@OneToOne
	@JoinColumn(name="match_setting_1st",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting1st;
	
	@OneToOne
	@JoinColumn(name="match_setting_2nd",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting2nd;
	
	@OneToOne
	@JoinColumn(name="match_setting_3rd",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting3rd;
	
	@OneToOne
	@JoinColumn(name="match_setting_4th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting4th;
	
	@OneToOne
	@JoinColumn(name="match_setting_5th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting5th;
	
	@OneToOne
	@JoinColumn(name="match_setting_6th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting6th;
	
	@OneToOne
	@JoinColumn(name="match_setting_7th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting7th;
	
	@OneToOne
	@JoinColumn(name="match_setting_8th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting8th;
	
	@OneToOne
	@JoinColumn(name="match_setting_9th",referencedColumnName="user_hitter_seq")
	private UserHitter matchSetting9th;
	
	@Column(name="match_setting_next_bat")
	private Integer matchSettingNextBat;
	
}
