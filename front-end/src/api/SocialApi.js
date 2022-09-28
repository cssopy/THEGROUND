const REDIRECT_URI = "https://j7d109.p.ssafy.io";
// const REDIRECT_URI = "http://localhost:3000";

// 네이버
const NAVER_CLIENT_ID = "PVGrBZM8vqHq_92Vh6Wx";
const NAVER_CLIENT_SECRET = "tSbysXbRL1";
const NAVER_STATE_STRING = Math.floor(
  Math.random() * (20000000 - 10000000) + 10000000
);
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE_STRING}&redirect_uri=${REDIRECT_URI}`;
const NAVER_LOGIN = (CODE, STATE) =>
  `/token/?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${CODE}&state=${STATE}`;

// 카카오
const KAKAO_REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_LOGIN = (CODE) =>
  `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`;

// 구글
const GOOGLE_CLIENT_ID =
  "824400159984-9lg3ubjictcle5lbsbj39s076lko1fhh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_SCOPE = "https://www.googleapis.com/auth/userinfo.email";
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseacount?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${GOOGLE_SCOPE}`;
const GOOGLE_LOGIN = (CODE) =>
  `https://www.googleapis.com/oauth2/v4/token?code=${CODE}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`;

export default {
  naver: {
    auth: NAVER_AUTH_URL,
    login: NAVER_LOGIN,
  },
  kakao: {
    auth: KAKAO_AUTH_URL,
    login: KAKAO_LOGIN,
  },
  google: {
    auth: GOOGLE_AUTH_URL,
    login: GOOGLE_LOGIN,
  },
};
