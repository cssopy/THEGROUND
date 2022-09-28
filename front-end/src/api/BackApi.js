const HOST = "https://j7d109.p.ssafy.io/back";

const USERS = "/users";
const MAIN = "/main";
const MANAGE = "/manage";
const TRADE = "/trade";
const GAME = "/game";

export default {
  users: {
    login: () => HOST + USERS + "/login",
    signup: () => HOST + USERS + "/signup",
    modify: () => HOST + USERS + "/modify",
    quit: () => HOST + USERS + "/quit",
    logos: () => HOST + USERS + "/logos",
    mypage: () => HOST + USERS + "mypage",
  },
  main: {
    matches: () => HOST + MAIN + "/matches",
    schedules: () => HOST + MAIN + "/schedules",
  },
  manage: {
    pitchers: () => HOST + MANAGE + "/pitchers",
    hitters: () => HOST + MANAGE + "/hitters",
    rotation: () => HOST + MANAGE + "/rotation",
  },
  trade: {
    "poss-pitchers": () => HOST + TRADE + "/poss-pitchers",
    "poss-hitters": () => HOST + TRADE + "/poss-hitters",
    "not-poss-pitchers": () => HOST + TRADE + "/not-poss-pitchers",
    "not-poss-hitters": () => HOST + TRADE + "/not-poss-hitters",
    save: () => HOST + TRADE + "/save",
  },
  game: {
    brief: () => HOST + GAME + "/brief",
    "batting-order": () => HOST + GAME + "/batting-order",
    "line-up": () => HOST + GAME + "/line-up",
    logs: () => HOST + GAME + "/logs",
    play: () => HOST + GAME + "/play",
    skip: () => HOST + GAME + "/skip",
    change: () => HOST + GAME + "/change",
    result: () => HOST + GAME + "/result",
  },
  stats: HOST + "/stats",
};
