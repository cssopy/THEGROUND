import { createSlice } from "@reduxjs/toolkit/";

const initialLogoState = {
  logos: [],
};

const logoSlice = createSlice({
  name: "logos",
  initialState: initialLogoState,
  reducers: {
    setLogos: (state, action) => {
      state.logos = action.payload;
    },
  },
});

export const logoActions = logoSlice.actions;
export default logoSlice.reducer;
