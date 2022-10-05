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
@Table(name = "seasons")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "season_seq")
    private Long seasonSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User userSeq;

    @Column(name = "season_year")
    private int seasonYear;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_seq")
    private Schedule scheduleSeq;
}
