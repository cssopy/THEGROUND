package com.ssafy.theground.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "out_players")
public class OutPlayer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="out_player_seq")
    private Long outPlayerSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "match_seq")
    @NotNull
    private Match matchSeq;

    @Column(name="out_player_player")
    private Long outPlayerPlayerSeq;

    @Column(name="out_player_type")
    private Character outPlayerType;
}
