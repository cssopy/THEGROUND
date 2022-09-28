package com.ssafy.theground.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_pitchers")
public class UserPitcher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_pitcher_seq")
    private Long userPitcherSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    @NotNull
    private User userSeq;

    @Column(name = "pitcher_seq")
    private Long pitcherSeq;

    @Column(name = "user_pitcher_name")
    private String userPitcherName;
}
