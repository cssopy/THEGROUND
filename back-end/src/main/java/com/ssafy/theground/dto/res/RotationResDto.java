package com.ssafy.theground.dto.res;

import com.ssafy.theground.entity.Pitcher;

import lombok.Data;

@Data
public class RotationResDto {
	private Pitcher teamSetting1stSp;
	private Pitcher teamSetting2ndSp;
    private Pitcher teamSetting3rdSp;
    private Pitcher teamSetting4thSp;
    private Pitcher teamSetting5thSp;
    private Integer teamSettingNextSp;
}
