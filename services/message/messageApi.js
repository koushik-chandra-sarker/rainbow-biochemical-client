import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";
import {HYDRATE} from "next-redux-wrapper";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: customBaseQuery,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => ({
        url: API.messages,
        method: "GET"
      })
    }),
    createMessage: builder.mutation({
      query: (message) => ({
        url: API.messages,
        method: "POST",
        body: message
      })
    })
  })
})

export const {
  useGetMessagesQuery,
  useCreateMessageMutation,
  util: {getRunningQueriesThunk},
} = messageApi;