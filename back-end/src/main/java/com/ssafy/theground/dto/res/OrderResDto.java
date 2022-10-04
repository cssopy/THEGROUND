package com.ssafy.theground.dto.res;



import com.ssafy.theground.entity.Hitter;
import com.ssafy.theground.entity.Pitcher;

import lombok.Data;

@Data
public class OrderResDto {
	private String teamName;
	
	private String teamLogoUrl;

	private Hitter hitter1st;

	private Hitter hitter2nd;

	private Hitter hitter3rd;

	private Hitter hitter4th;

	private Hitter hitter5th;

	private Hitter hitter6th;

	private Hitter hitter7th;

	private Hitter hitter8th;

	private Hitter hitter9th;
	
	private Pitcher pitcher;
}
