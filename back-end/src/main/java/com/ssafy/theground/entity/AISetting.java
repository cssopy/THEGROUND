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

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="ai_settings")
public class AISetting {
	
	@Id
	@Column(name="ai_team_seq")
	private Long aiTeamSeq;
	
	@OneToOne
	@MapsId
	@JoinColumn(name="ai_team_seq")
	private AITeam aiTeam;
	
	@OneToOne
	@JoinColumn(name="ai_setting_1st", referencedColumnName="hitter_seq")
	private Hitter aiSetting1st;
	
	@OneToOne
	@JoinColumn(name="ai_setting_2nd", referencedColumnName="hitter_seq")
	private Hitter aiSetting2nd;
	
	@OneToOne
	@JoinColumn(name="ai_setting_3rd", referencedColumnName="hitter_seq")
	private Hitter aiSetting3rd;
	
	@OneToOne
	@JoinColumn(name="ai_setting_4th", referencedColumnName="hitter_seq")
	private Hitter aiSetting4th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_5th", referencedColumnName="hitter_seq")
	private Hitter aiSetting5th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_6th", referencedColumnName="hitter_seq")
	private Hitter aiSetting6th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_7th", referencedColumnName="hitter_seq")
	private Hitter aiSetting7th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_8th", referencedColumnName="hitter_seq")
	private Hitter aiSetting8th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_9th", referencedColumnName="hitter_seq")
	private Hitter aiSetting9th;
	
	@OneToOne
	@JoinColumn(name="ai_setting_sp1", referencedColumnName="pitcher_seq")
	private Pitcher aiSettingsp1;
	
	@OneToOne
	@JoinColumn(name="ai_setting_sp2", referencedColumnName="pitcher_seq")
	private Pitcher aiSettingsp2;
	
	@OneToOne
	@JoinColumn(name="ai_setting_sp3", referencedColumnName="pitcher_seq")
	private Pitcher aiSettingsp3;
	
	@OneToOne
	@JoinColumn(name="ai_setting_sp4", referencedColumnName="pitcher_seq")
	private Pitcher aiSettingsp4;
	
	@OneToOne
	@JoinColumn(name="ai_setting_sp5", referencedColumnName="pitcher_seq")
	private Pitcher aiSettingsp5;
	
	@Column(name="ai_setting_hitter")
	private Integer aiSettingHitter;
	
	@Column(name="ai_setting_pitcher")
	private Integer aiSettingPitcher;
	
	
}
