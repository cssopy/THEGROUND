package com.ssafy.theground.dto.res;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BriefInfoResDto {
    private String teamName;

    private String teamLogoUrl;

    private int teamWin;

    private int teamLose;

    private int teamDraw;

    private String startingPitcher;
}
