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
    private Long hitterSeq;

    private String hitterName;

    private double avg;

    private int game;

    private String batArm;

    private int atBat;

    private int hit;

    private int doubles;

    private int triple;

    private int homerun;

    private int rbi;

    private int run;

    private int steal;

    private int walks;

    private int strikeout;

    private double obp;

    private double slg;

    private double ops;

    private double isop;

    private double babip;

    private double woba;

    private double wrc;

    private double wpa;

    private double war;

    private double zone;

    private double zone2;

    private double zone3;

    private double zone4;

    private double zone5;

    private double zone6;

    private double zone7;

    private double zone8;

    private double zone9;

    private double zone11;

    private double zone12;

    private double zone13;

    private double zone14;

    private int salary;
}
