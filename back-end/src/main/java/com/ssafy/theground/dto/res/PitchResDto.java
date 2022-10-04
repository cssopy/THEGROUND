package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PitchResDto {
    private String pitchType;
    private double ballX;
    private double ballY;
    private int zone;
    private double velocity;
    private int ball;
    private int strike;
    private String description;
}
