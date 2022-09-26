package com.ssafy.theground.dto.req;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TradeSaveReqDto {
    private String pit;

    private List<Long> pitSeq;

    private String hit;

    private List<Long> hitSeq;
}
