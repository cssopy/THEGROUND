package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@ToString(exclude = "userSeq")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "team_settings")
public class TeamSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_setting_seq")
    private Long teamSettingSeq;

    @OneToOne
    @JoinColumn(name = "user_seq")
    private User userSeq;

    @OneToOne
    @JoinColumn(name = "team_setting_1st_sp", referencedColumnName="user_pitcher_seq")
    private UserPitcher teamSetting1stSp;

    @OneToOne
    @JoinColumn(name = "team_setting_2nd_sp", referencedColumnName="user_pitcher_seq")
    private UserPitcher teamSetting2ndSp;

    @OneToOne
    @JoinColumn(name = "team_setting_3rd_sp", referencedColumnName="user_pitcher_seq")
    private UserPitcher teamSetting3rdSp;

    @OneToOne
    @JoinColumn(name = "team_setting_4th_sp", referencedColumnName="user_pitcher_seq")
    private UserPitcher teamSetting4thSp;

    @OneToOne
    @JoinColumn(name = "team_setting_5th_sp", referencedColumnName="user_pitcher_seq")
    private UserPitcher teamSetting5thSp;

    @Column(name = "team_setting_next_sp")
    private Integer teamSettingNextSp;
}
