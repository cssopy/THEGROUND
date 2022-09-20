package com.ssafy.theground.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "team_settings")
public class TeamSetting {

    @Id
    @OneToOne
    @JoinColumn(name = "userSeq")
    private User userSeq;

    private Long teamSetting1stSp;

    private Long teamSetting2ndSp;

    private Long teamSetting3rdSp;

    private Long teamSetting4thSp;

    private Long teamSetting5thSp;

    private String teamSettingNextSp;
}
