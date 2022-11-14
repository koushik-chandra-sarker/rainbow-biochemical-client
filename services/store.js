import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {masterReducer} from "./reducers";

export const makeStore = () => configureStore({
  reducer: masterReducer,
})
export const wrapper = createWrapper(makeStore, {debug: true})