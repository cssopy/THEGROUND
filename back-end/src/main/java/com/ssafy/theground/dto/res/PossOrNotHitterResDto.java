package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PossOrNotHitterResDto {
    private Long hitterSeq;

    private String hitterName;

    private String batArm;

    private double avg;

    private double obp;

    private double slg;

    private int homerun;

    private int salary;
}
