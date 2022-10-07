package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ai_teams")
public class AITeam {

    @Id
    @Column(name = "ai_team_seq")
    private Long aiTeamSeq;

    @Column(name = "ai_team_name")
    private String aiTeamName;

    @ManyToOne
    @JoinColumn(name = "logo_seq", referencedColumnName="logo_seq")
    private Logo logoSeq;
}
