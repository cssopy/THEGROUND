const HOST = "https://j7d109.p.ssafy.io/back";

const USERS = "/users";
const MAIN = "/main";
const MANAGE = "/manage";
const TRADE = "/trade";
const GAME = "/game";

export default {
  users: {
    login: HOST + USERS + "/login",
    signup: HOST + USERS + "/signup",
    modify: HOST + USERS + "/modify",
    quit: HOST + USERS + "/quit",
    logos: HOST + USERS + "/logos",
    mypage: HOST + USERS + "/mypage",
  },
  main: {
    matches: HOST + MAIN + "/matches",
    schedules: HOST + MAIN + "/schedules",
  },
  manage: {
    pitchers: HOST + MANAGE + "/pitchers",
    hitters: HOST + MANAGE + "/hitters",
    rotation: HOST + MANAGE + "/rotation",
  },
  trade: {
    possPitchers: HOST + TRADE + "/poss-pitchers",
    possHitters: HOST + TRADE + "/poss-hitters",
    notPossPitchers: HOST + TRADE + "/not-poss-pitchers",
    notPossHitters: HOST + TRADE + "/not-poss-hitters",
    save: HOST + TRADE + "/save",
  },
  game: {
    brief: HOST + GAME + "/brief",
    battingOrder: HOST + GAME + "/batting-order",
    lineUp: HOST + GAME + "/line-up",
    logs: HOST + GAME + "/logs",
    play: HOST + GAME + "/play",
    skip: HOST + GAME + "/skip",
    change: HOST + GAME + "/change",
    result: HOST + GAME + "/result",
  },
  stats: HOST + "/stats",
};
