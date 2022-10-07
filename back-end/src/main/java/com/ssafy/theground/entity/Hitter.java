package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hitters")
public class Hitter {

    @Id
    @Column(name = "hitter_seq")
    private Long hitterSeq;

    @Column(name = "hitter_name")
    private String hitterName;

    @Column(name = "hitter_avg")
    private double avg;

    @Column(name = "hitter_game")
    private int game;

    @Column(name = "hitter_bat_arm")
    private String batArm;

    @Column(name = "hitter_at_bat")
    private int atBat;

    @Column(name = "hitter_hit")
    private int hit;

    @Column(name = "hitter_doubles")
    private int doubles;

    @Column(name = "hitter_triple")
    private int triple;

    @Column(name = "hitter_homerun")
    private int homerun;

    @Column(name = "hitter_rbi")
    private int rbi;

    @Column(name = "hitter_run")
    private int run;

    @Column(name = "hitter_steal")
    private int steal;

    @Column(name = "hitter_walks")
    private int walks;

    @Column(name = "hitter_strikeout")
    private int strikeout;

    @Column(name = "hitter_obp")
    private double obp;

    @Column(name = "hitter_slg")
    private double slg;

    @Column(name = "hitter_ops")
    private double ops;

    @Column(name = "hitter_isop")
    private double isop;

    @Column(name = "hitter_babip")
    private double babip;

    @Column(name = "hitter_woba")
    private double woba;

    @Column(name = "hitter_wrc")
    private double wrc;

    @Column(name = "hitter_wpa")
    private double wpa;

    @Column(name = "hitter_war")
    private double war;

    @Column(name = "hitter_zone")
    private double zone;

    @Column(name = "hitter_zone2")
    private double zone2;

    @Column(name = "hitter_zone3")
    private double zone3;

    @Column(name = "hitter_zone4")
    private double zone4;

    @Column(name = "hitter_zone5")
    private double zone5;

    @Column(name = "hitter_zone6")
    private double zone6;

    @Column(name = "hitter_zone7")
    private double zone7;

    @Column(name = "hitter_zone8")
    private double zone8;

    @Column(name = "hitter_zone9")
    private double zone9;

    @Column(name = "hitter_zone11")
    private double zone11;

    @Column(name = "hitter_zone12")
    private double zone12;

    @Column(name = "hitter_zone13")
    private double zone13;

    @Column(name = "hitter_zone14")
    private double zone14;

    @Column(name = "hitter_salary")
    private int salary;
}
