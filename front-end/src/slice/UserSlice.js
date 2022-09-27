import { createSlice } from "@reduxjs/toolkit/";


const initialUserState = {
  uid: '',
  userTeamname: '',
  jwtToken: '',
}

const UserSlice = createSlice({
  name: 'User',
  initialState: initialUserState,
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    setUserTeamname: (state, action) => {
      state.userTeamname = action.payload;
    },
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },
  }
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;