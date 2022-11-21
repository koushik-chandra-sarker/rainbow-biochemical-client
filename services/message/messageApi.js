import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: customBaseQuery,
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
  useCreateMessageMutation
} = messageApi;