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
@Table(name = "user_hitters")
public class UserHitter {

    @Id
    @Column(name = "user_hitter_seq")
    private Long userHitterSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    @NotNull
    private User userSeq;

    @Column(name = "hitter_seq")
    private Long hitterSeq;

    @Column(name = "user_hitter_name")
    private String userHitterName;
}
