package com.ssafy.theground.dto.res;

import lombok.Data;

@Data
public class LineupResDto {
	private OrderResDto home;
	private OrderResDto away;
}
