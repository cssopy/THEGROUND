import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../slice/UserSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  }
});


export default store;
