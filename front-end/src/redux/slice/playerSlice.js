import { createSlice } from "@reduxjs/toolkit/";

const initialPlayerState = {
  players: {
    hitter: [],
    pitcher: [],
  },
};

const playerSlice = createSlice({
  name: "players",
  initialState: initialPlayerState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
