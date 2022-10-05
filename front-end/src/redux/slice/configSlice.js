import { createSlice } from "@reduxjs/toolkit/";

const initialConfigState = {
  url: "",
  loading: {
    isLoading: false,
    percentage: 0,
  },
  visited: false,
  music: false,
};

const configSlice = createSlice({
  name: "config",
  initialState: initialConfigState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setIsLoading: (state, action) => {
      state.loading.isLoading = action.payload;
    },
    setPersentage: (state, action) => {
      state.loading.percentage = state.loading.percentage + action.payload;
    },
    resetPersentage: (state) => {
      state.loading.percentage = 0;
    },
    setVisited: (state) => {
      state.visited = true;
    },
    setMusic: (state, action) => {
      state.music = action.payload;
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
