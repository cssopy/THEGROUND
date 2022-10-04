import { createSlice } from "@reduxjs/toolkit/";

const initialUserState = {
  user: {
    uid: "",
    jwt: "",
    loginType: "",
    logoUrl: "",
    logo: {},
    userTeamname: "",
    userExp: 0,
    userLevel: 0,
    userWin: 0,
    userLose: 0,
    userDraw: 0,
    userPayroll: 1000000000,
    userInPlayFlag: false,
  },
  loading: {
    isLoading: true,
    percentage: 0,
  },
  visited: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUid: (state, action) => {
      state.user.uid = action.payload;
    },
    setJwt: (state, action) => {
      state.user.jwt = action.payload;
    },
    setLogo: (state, action) => {
      state.user.logo = action.payload;
    },
    setLoginType: (state, action) => {
      state.user.loginType = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    updateUser: (state, action) => {
      state.user.userTeamname = action.payload.userTeamname;
      state.user.logoUrl = action.payload.logoUrl;
    },
    toggleIsLoading: (state, action) => {
      state.loading.isLoading = action.payload;
    },
    setPersentage: (state, action) => {
      state.loading.percentage = action.payload;
    },
    setVisited: (state) => {
      state.visited = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
