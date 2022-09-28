package com.ssafy.theground.dto.req;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TradeSaveReqDto {

    private List<Long> pitcherSeq;

    private List<Long> hitterSeq;
}
