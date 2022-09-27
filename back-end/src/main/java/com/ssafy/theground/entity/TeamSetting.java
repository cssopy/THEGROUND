package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString(exclude = "userSeq")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "team_settings")
public class TeamSetting {

    @Id
    @Column(name = "team_setting_seq")
    private Long teamSettingSeq;

    @OneToOne
    @JoinColumn(name = "user_seq")
    private User userSeq;

    @Column(name = "team_setting_1st_sp")
    private Long teamSetting1stSp;

    @Column(name = "team_setting_2nd_sp")
    private Long teamSetting2ndSp;

    @Column(name = "team_setting_3rd_sp")
    private Long teamSetting3rdSp;

    @Column(name = "team_setting_4th_sp")
    private Long teamSetting4thSp;

    @Column(name = "team_setting_5th_sp")
    private Long teamSetting5thSp;

    @Column(name = "team_setting_next_sp")
    private String teamSettingNextSp;
}
