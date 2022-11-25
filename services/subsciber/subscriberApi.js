import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";
import {HYDRATE} from "next-redux-wrapper";
import {messageApi} from "../message/messageApi";

export const subscriberApi = createApi({
  reducerPath: "subscriberApi",
  baseQuery: customBaseQuery,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getSubscribers: builder.query({
      query: () => ({
        url: API.subscriber,
        method: "GET"
      })
    }),
    createSubscriber: builder.mutation({
      query: (subscriber) => ({
        url: API.subscriber,
        method: "POST",
        body: subscriber
      })
    })
  })
})

export const {
  useGetSubscribersQuery,
  useCreateSubscriberMutation,
  util: {getRunningQueriesThunk},

} = subscriberApi;
export const {createEmail} = messageApi;