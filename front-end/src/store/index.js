import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    // reducer 넣는 자리
    // slice를 import 하고 이를 slice.reducer로 접근
    // ex) counter: counterSlice.reducer,
  }
});

export default store;
