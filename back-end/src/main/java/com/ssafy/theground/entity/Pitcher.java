package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pitchers")
public class Pitcher {

    @Id
    @Column(name = "pitcher_seq")
    private Long pitcherSeq;

    @Column(name = "pitcher_name")
    private String pitcherName;

    @Column(name = "pitcher_era")
    private int era;

    @Column(name = "pitcher_game")
    private int game;

    @Column(name = "pitcher_inning")
    private int inning;

    @Column(name = "pitcher_win")
    private int win;

    @Column(name = "pitcher_lose")
    private int lose;

    @Column(name = "pitcher_pit_arm")
    private String pitArm;

    @Column(name = "pitcher_save")
    private int save;

    @Column(name = "pitcher_hold")
    private int hold;

    @Column(name = "pitcher_strikeout")
    private int strikeout;

    @Column(name = "pitcher_hits")
    private int hits;

    @Column(name = "pitcher_homerun")
    private int homerun;

    @Column(name = "pitcher_run")
    private int run;

    @Column(name = "pitcher_walk")
    private int walk;

    @Column(name = "pitcher_hit_by_pitch")
    private int hitByPitch;

    @Column(name = "pitcher_rating")
    private double rating;

    @Column(name = "pitcher_whip")
    private double whip;

    @Column(name = "pitcher_so9")
    private double so9;

    @Column(name = "pitcher_bb9")
    private double bb9;

    @Column(name = "pitcher_so_rate")
    private double soRate;

    @Column(name = "pitcher_bb_rate")
    private double bbRate;

    @Column(name = "pitcher_wpa")
    private double wpa;

    @Column(name = "pitcher_war")
    private double war;

    @Column(name = "pitcher_qs")
    private int qs;

    @Column(name = "pitcher_qsp")
    private int qsp;

    @Column(name = "pitcher_ds")
    private int ds;

    @Column(name = "pitcher_fourseam")
    private int fourSeam;

    @Column(name = "pitcher_slider")
    private int slider;

    @Column(name = "pitcher_sinker")
    private int sinker;

    @Column(name = "pitcher_changeup")
    private int changeUp;

    @Column(name = "pitcher_curve")
    private int curve;

    @Column(name = "pitcher_cutter")
    private int cutter;

    @Column(name = "pitcher_knuckle_curve")
    private int knuckleCurve;

    @Column(name = "pitcher_splitter")
    private int splitter;

    @Column(name = "pitcher_twoseam")
    private int twoSeam;

    @Column(name = "pitcher_knuckleball")
    private int knuckleball;

    @Column(name = "pitcher_eephus")
    private int eephus;

    @Column(name = "pitcher_screwball")
    private int screwball;

    @Column(name = "pitcher_salary")
    private int salary;
}
