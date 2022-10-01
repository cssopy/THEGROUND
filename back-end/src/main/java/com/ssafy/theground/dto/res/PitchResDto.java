package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PitchResDto {
    private double ballX;
    private double ballY;
    private String description;
    private String pitchType;
    private int ball;
    private int strike;
    private int speed;
}
