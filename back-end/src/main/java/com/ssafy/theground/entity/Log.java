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
@Table(name = "logs")
public class Log {
    @Id
    @Column(name="match_seq")
    private Long matchSeq;

    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @Column(name="log_inning")
    private int logInning;

    @Column(name="log_half")
    private String logHalf;

    @Column(name="log_out")
    private int logOut;

    @Column(name="log_pitcher")
    private long logPitcher;

    @Column(name="log_hitter")
    private long logHitter;

    @Column(name="log_1st_base")
    private Long log1stBase;

    @Column(name="log_2nd_base")
    private Long log2ndBase;

    @Column(name="log_3rd_base")
    private Long log3rdBase;
}
