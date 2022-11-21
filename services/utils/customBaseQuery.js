import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {API} from "./api.constant";

export const customBaseQuery = fetchBaseQuery({
  baseUrl: API.baseUrl,
  prepareHeaders: (headers, {getState}) => {
    // const token = getState().auth.token;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    headers.set('Content-Type', 'application/json');
    return headers;
  }
});