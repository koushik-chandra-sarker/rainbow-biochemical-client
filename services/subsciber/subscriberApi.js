import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";

export const subscriberApi = createApi({
  reducerPath: "subscriberApi",
  baseQuery: customBaseQuery,
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
  useCreateSubscriberMutation
} = subscriberApi;