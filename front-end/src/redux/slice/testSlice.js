import { createSlice } from "@reduxjs/toolkit/";

const initialTestState = {
  match: {
    home: {},
  },
  game: {},
};

const testSlice = createSlice({
  name: "test",
  initialState: initialTestState,
  reducers: {
    setHome: (state, action) => {
      state.match.home = action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export default testSlice.reducer;
