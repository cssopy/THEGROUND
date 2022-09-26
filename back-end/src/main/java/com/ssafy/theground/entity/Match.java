package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "matches")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "match_seq")
    private Long matchSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User userSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "season_seq")
    private Season seasonSeq;

    @Column(name = "ai_team_seq")
    private Long aiTeamSeq;

    @Column(name = "match_home_flag")
    private boolean matchHomeFlag;
}
