import { createSlice } from "@reduxjs/toolkit/";

const initialConfigState = {
  url: "",
  loading: {
    isLoading: false,
    percentage: 0,
  },
  music: false,
  visited: false,
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
      const percentage = state.loading.percentage + action.payload;
      state.loading.percentage = percentage > 100 ? 100 : percentage;
    },
    resetPersentage: (state) => {
      state.loading.percentage = 0;
    },
    setMusic: (state, action) => {
      state.music = action.payload;
    },
    setVisited: (state) => {
      state.visited = true;
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
