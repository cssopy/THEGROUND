package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "scoreboards")
public class Scoreboard implements Serializable {
    @Id
    @Column(name="match_seq")
    private Long matchSeq;

    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @NotNull
    @Column(name="scoreboard_1st_top")
    private int scoreboard1stTop = 0;

    @NotNull
    @Column(name="scoreboard_1st_bottom")
    private int scoreboard1stBottom = 0;

    @NotNull
    @Column(name="scoreboard_2nd_top")
    private int scoreboard2ndTop = 0;

    @NotNull
    @Column(name="scoreboard_2nd_bottom")
    private int scoreboard2ndBottom = 0;

    @NotNull
    @Column(name="scoreboard_3rd_top")
    private int scoreboard3rdTop = 0;

    @NotNull
    @Column(name="scoreboard_3rd_bottom")
    private int scoreboard3rdBottom = 0;

    @NotNull
    @Column(name="scoreboard_4th_top")
    private int scoreboard4thTop = 0;

    @NotNull
    @Column(name="scoreboard_4th_bottom")
    private int scoreboard4thBottom = 0;

    @NotNull
    @Column(name="scoreboard_5th_top")
    private int scoreboard5thTop = 0;

    @NotNull
    @Column(name="scoreboard_5th_bottom")
    private int scoreboard5thBottom = 0;

    @NotNull
    @Column(name="scoreboard_6th_top")
    private int scoreboard6thTop = 0;

    @NotNull
    @Column(name="scoreboard_6th_bottom")
    private int scoreboard6thBottom = 0;

    @NotNull
    @Column(name="scoreboard_7th_top")
    private int scoreboard7thTop = 0;

    @NotNull
    @Column(name="scoreboard_7th_bottom")
    private int scoreboard7thBottom = 0;

    @NotNull
    @Column(name="scoreboard_8th_top")
    private int scoreboard8thTop = 0;

    @NotNull
    @Column(name="scoreboard_8th_bottom")
    private int scoreboard8thBottom = 0;

    @NotNull
    @Column(name="scoreboard_9th_top")
    private int scoreboard9thTop = 0;

    @NotNull
    @Column(name="scoreboard_9th_bottom")
    private int scoreboard9thBottom = 0;

    @NotNull
    @Column(name="scoreboard_home_score")
    private int scoreboardHomeScore = 0;

    @NotNull
    @Column(name="scoreboard_away_score")
    private int scoreboardAwayScore = 0;

    @NotNull
    @Column(name="scoreboard_home_hit")
    private int scoreboardHomeHit = 0;

    @NotNull
    @Column(name="scoreboard_away_hit")
    private int scoreboardAwayHit = 0;

    @NotNull
    @Column(name="scoreboard_home_walk")
    private int scoreboardHomeWalk = 0;

    @NotNull
    @Column(name="scoreboard_away_walk")
    private int scoreboardAwayWalk = 0;

    @NotNull
    @Column(name="scoreboard_home_homerun")
    private int scoreboardHomeHomerun = 0;

    @NotNull
    @Column(name="scoreboard_away_homerun")
    private int scoreboardAwayHomerun = 0;

    @NotNull
    @Column(name="scoreboard_home_strikeout")
    private int scoreboardHomeStrikeout = 0;

    @NotNull
    @Column(name="scoreboard_away_strikeout")
    private int scoreboardAwayStrikeout = 0;
}
