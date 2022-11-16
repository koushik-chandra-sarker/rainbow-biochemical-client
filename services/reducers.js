import {combineReducers} from "@reduxjs/toolkit";
import siteDetails from "./siteDetails/siteDetailsSlice";

export const combinedReducer = combineReducers({
  siteDetails: siteDetails
});


// export const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       siteDetails: [...action.payload, ...state.payload]
//     };
//     return nextState;
//   }
//   return combinedReducer(state, action);
// }