package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "schedules")
public class Schedule {

    @Id
    @Column(name = "match_seq")
    private Long matchSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_seq")
    private AITeam teamSeq;

}
