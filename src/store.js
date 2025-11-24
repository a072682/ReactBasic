import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";
import testReducer from "./slice/testSlicejs";

export const store = configureStore({
    reducer: { // 必要加入 reducer
      test: testReducer,
      modal: modalReducer,
      //counter為元件的名稱，可更改 
      //counterReducer為引入的元件改名後的名稱不可更改
    }
  });

export default store;