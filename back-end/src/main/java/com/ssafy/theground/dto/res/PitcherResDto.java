package com.ssafy.theground.dto.res;

import lombok.*;

@Getter
@Setter
public class PitcherResDto {
    private Long pitcherSeq;
    private String pitcherName;
    private String arm;
    private int era;
    private int game;
    private int inning;
    private int win;
    private int lose;
}
