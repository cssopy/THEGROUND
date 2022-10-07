package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PossOrNotPitcherResDto {
    private Long pitcherSeq;

    private String pitcherName;

    private String pitArm;

    private int era;

    private int inning;

    private int win;

    private int lose;

    private int salary;
}
