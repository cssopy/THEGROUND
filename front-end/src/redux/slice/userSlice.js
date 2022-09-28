import { createSlice } from "@reduxjs/toolkit/";

const initialUserState = {
  uid: "",
  jwt: "",
  logoUrl: "",
  userTeamname: "",
  userExp: 0,
  userLevel: 0,
  userWin: 0,
  userLose: 0,
  userDraw: 0,
  userPayroll: 1000000000,
  userInPlayFlag: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    setJwt: (state, action) => {
      state.jwt = action.payload;
    },
    setUserTeamname: (state, action) => {
      state.userTeamname = action.payload;
    },
    updateUser: (state, action) => {
      state.userTeamname = action.payload.userTeamname;
      state.logoUrl = action.payload.logoUrl;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
