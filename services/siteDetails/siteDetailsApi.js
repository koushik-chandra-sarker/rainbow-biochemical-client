import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";
import {HYDRATE} from "next-redux-wrapper";

export const siteDetailsApi = createApi({
  reducerPath: "siteDetailsApi",
  baseQuery: customBaseQuery,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getSiteDetails: builder.query({
      query: () => ({
        url: API.siteDetails,
        method: "GET"
      })
    })
  })
})

export const {
  useGetSiteDetailsQuery,
  util: {getRunningQueriesThunk},
} = siteDetailsApi;

export const {getSiteDetails} = siteDetailsApi.endpoints;