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
    private Long pitcherSeq;

    private String pitcherName;

    private int era;

    private int game;

    private int inning;

    private int win;

    private int lose;

    private String pitArm;

    private int save;

    private int hold;

    private int strikeout;

    private int hits;

    private int homerun;

    private int run;

    private int walk;

    private int hitByPitch;

    private double rating;

    private double whip;

    private double so9;

    private double bb9;

    private double soRate;

    private double bbRate;

    private double wpa;

    private double war;

    private int qs;

    private int qsp;

    private int ds;

    private int fourSeam;

    private int slider;

    private int sinker;

    private int changeUp;

    private int curve;

    private int cutter;

    private int knuckleCurve;

    private int splitter;

    private int twoSeam;

    private int knuckleball;

    private int eephus;

    private int screwball;

    private int salary;
}
