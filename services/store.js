import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {combinedReducer} from "./reducers";

export const makeStore = () => configureStore({
  reducer: combinedReducer,
})
export const wrapper = createWrapper(makeStore)