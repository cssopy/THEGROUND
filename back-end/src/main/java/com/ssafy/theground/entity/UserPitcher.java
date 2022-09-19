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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userSeq")
    @NotNull
    private User userSeq;

    private Long pitcherSeq;

    private String userPitcherName;
}
