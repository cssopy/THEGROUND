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
@Table(name = "match_settings")
public class MatchSetting {
    @Id
    @Column(name="match_seq")
    private Long matchSeq;

    @OneToOne
    @MapsId
    @JoinColumn(name="match_seq")
    private Match match;

    @Column(name="match_setting_pitcher")
    private long matchSettingPitcher;

    @Column(name="match_setting_1st")
    private long matchSetting1st;

    @Column(name="match_setting_2nd")
    private long matchSetting2nd;

    @Column(name="match_setting_3rd")
    private long matchSetting3rd;

    @Column(name="match_setting_4th")
    private long matchSetting4th;

    @Column(name="match_setting_5th")
    private long matchSetting5th;

    @Column(name="match_setting_6th")
    private long matchSetting6th;

    @Column(name="match_setting_7th")
    private long matchSetting7th;

    @Column(name="match_setting_8th")
    private long matchSetting8th;

    @Column(name="match_setting_9th")
    private long matchSetting9th;

    @Column(name="match_setting_next_bat")
    private int matchSettingNextBat;
}
