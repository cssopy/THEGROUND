package com.ssafy.theground.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_pitchers")
public class UserPitcher {

    @Id
    @Column(name = "user_pitcher_seq")
    private Long userPitcherSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userSeq")
    @NotNull
    private User userSeq;

    @Column(name = "pitcher_seq")
    private Long pitcherSeq;

    @Column(name = "user_pitcher_name")
    private String userPitcherName;
}
