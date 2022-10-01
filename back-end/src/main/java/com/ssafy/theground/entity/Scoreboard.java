package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "scoreboards")
public class Scoreboard {
    @Id
    @Column(name="match_seq")
    private Long matchSeq;

    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @Column(name="scoreboard_1st_top")
    private int scoreboard1stTop;

    @Column(name="scoreboard_1st_bottom")
    private int scoreboard1stBottom;

    @Column(name="scoreboard_2nd_top")
    private int scoreboard2ndTop;

    @Column(name="scoreboard_2nd_bottom")
    private int scoreboard2ndBottom;

    @Column(name="scoreboard_3rd_top")
    private int scoreboard3rdTop;

    @Column(name="scoreboard_3rd_bottom")
    private int scoreboard3rdBottom;

    @Column(name="scoreboard_4th_top")
    private int scoreboard4thTop;

    @Column(name="scoreboard_4th_bottom")
    private int scoreboard4thBottom;

    @Column(name="scoreboard_5th_top")
    private int scoreboard5thTop;

    @Column(name="scoreboard_5th_bottom")
    private int scoreboard5thBottom;

    @Column(name="scoreboard_6th_top")
    private int scoreboard6thTop;

    @Column(name="scoreboard_6th_bottom")
    private int scoreboard6thBottom;

    @Column(name="scoreboard_7th_top")
    private int scoreboard7thTop;

    @Column(name="scoreboard_7th_bottom")
    private int scoreboard7thBottom;

    @Column(name="scoreboard_8th_top")
    private int scoreboard8thTop;

    @Column(name="scoreboard_8th_bottom")
    private int scoreboard8thBottom;

    @Column(name="scoreboard_9th_top")
    private int scoreboard9thTop;

    @Column(name="scoreboard_9th_bottom")
    private int scoreboard9thBottom;

    @Column(name="scoreboard_home_score")
    private int scoreboardHomeScore;

    @Column(name="scoreboard_away_score")
    private int scoreboardAwayScore;

    @Column(name="scoreboard_home_hit")
    private int scoreboardHomeHit;

    @Column(name="scoreboard_away_hit")
    private int scoreboardAwayHit;

    @Column(name="scoreboard_home_walk")
    private int scoreboardHomeWalk;

    @Column(name="scoreboard_away_walk")
    private int scoreboardAwayWalk;

    @Column(name="scoreboard_home_homerun")
    private int scoreboardHomeHomerun;

    @Column(name="scoreboard_away_homerun")
    private int scoreboardAwayHomerun;

    @Column(name="scoreboard_home_strikeout")
    private int scoreboardHomeStrikeout;

    @Column(name="scoreboard_away_strikeout")
    private int scoreboardAwayStrikeout;
}
