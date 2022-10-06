import { createSlice } from "@reduxjs/toolkit/";

const initialGameState = {
  games: [],
};

const gameSlice = createSlice({
  name: "games",
  initialState: initialGameState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
