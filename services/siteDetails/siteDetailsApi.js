import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";

export const siteDetailsApi = createApi({
  reducerPath: "siteDetailsApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getSiteDetails: builder.query({
      query: () => ({
        url: API.siteDetails,
        method: "GET"
      })
    })
  })
})

export const {useGetSiteDetailsQuery} = siteDetailsApi;