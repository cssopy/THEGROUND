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
    @Column(name = "schedule_seq")
    private Long scheduleSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_seq")
    private AITeam teamSeq;
}
