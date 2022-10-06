import { createSlice } from "@reduxjs/toolkit/";

const initialTestState = {
  nextMatchIndex: 0,
  matchs: [
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "시몬스 침대스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 88,
        teamLose: 50,
        teamDraw: 4,
        startingPitcher: 1,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 1, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "농심 신라면스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo02.png",
        teamWin: 85,
        teamLose: 53,
        teamDraw: 2,
        startingPitcher: 2,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 2, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "LG 이노텍스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo03.png",
        teamWin: 78,
        teamLose: 60,
        teamDraw: 2,
        startingPitcher: 3,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 3, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "롯데 도리토스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo04.png",
        teamWin: 79,
        teamLose: 61,
        teamDraw: 2,
        startingPitcher: 4,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 4, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "삼성 갤럭시스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo05.png",
        teamWin: 68,
        teamLose: 72,
        teamDraw: 1,
        startingPitcher: 5,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 5, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "애플 아이패드스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo06.png",
        teamWin: 65,
        teamLose: 72,
        teamDraw: 3,
        startingPitcher: 6,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 6, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "키움 증권스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo07.png",
        teamWin: 64,
        teamLose: 75,
        teamDraw: 2,
        startingPitcher: 7,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 7, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "기아 모닝스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo08.png",
        teamWin: 63,
        teamLose: 76,
        teamDraw: 4,
        startingPitcher: 8,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 8, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "카카오 게임스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo09.png",
        teamWin: 59,
        teamLose: 80,
        teamDraw: 2,
        startingPitcher: 9,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 9, //매치 시퀀스
      },
    },
    {
      home: {
        teamName: "본인",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo01.png",
        teamWin: 100,
        teamLose: 100,
        teamDraw: 100,
        startingPitcher: 1,
      },
      away: {
        teamName: "오리온 스윙칩스",
        teamLogoUrl: "https://j7d109.p.ssafy.io/download/logo10.png",
        teamWin: 45,
        teamLose: 95,
        teamDraw: 2,
        startingPitcher: 10,
      },
      matchSeq: {
        teamName: "home", // 값이 있으면 사용자는 HOME
        startingPitcher: 10, //매치 시퀀스
      },
    },
  ],
  battingOrder: {},
  game: {},
};

const testSlice = createSlice({
  name: "test",
  initialState: initialTestState,
  reducers: {
    setHome: (state, action) => {
      state.matchs[state.nextMatchIndex].home = action.payload;
    },
    setBattingOrder: (state, action) => {
      state.battingOrder = action.payload;
    },
    setNextMatchIndex: (state, action) => {
      state.battingOrder = state.battingOrder + action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export default testSlice.reducer;
