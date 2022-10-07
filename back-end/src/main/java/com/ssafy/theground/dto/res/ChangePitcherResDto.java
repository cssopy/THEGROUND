package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangePitcherResDto {
    private Long pitcherSeq;

    private String name;

    private String pitArm;

    private int era;
}
