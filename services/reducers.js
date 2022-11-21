import {combineReducers} from "@reduxjs/toolkit";
import {siteDetailsApi} from "./siteDetails/siteDetailsApi";

export const combinedReducer = combineReducers({
  [siteDetailsApi.reducerPath]: siteDetailsApi.reducer,
});

//
// export const masterReducer = (state, action) => {
//   // console.log("actionType", action.type);
//   // console.log("preState", state);
//   if (action.type === HYDRATE) {
//     console.log("HYDRATE--------", action);
//     // const nextState = {
//     //   ...state,
//     //   ...action.payload
//     // };
//     // console.log("nextState", nextState);
//     // return action.payload;
//   }
//   // return action.payload
//   return combinedReducer(state, action);
// }