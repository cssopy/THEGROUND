import { createSlice } from "@reduxjs/toolkit/";

const initialUserState = {
  user: {
    uid: "",
    jwt: "",
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
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    updateUser: (state, action) => {
      state.user.userTeamname = action.payload.userTeamname;
      state.user.logoUrl = action.payload.logoUrl;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
