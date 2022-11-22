import {configureStore} from "@reduxjs/toolkit";

import {siteDetailsApi} from "./siteDetails/siteDetailsApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productApi} from "./product/productApi";
import {messageApi} from "./message/messageApi";
import {subscriberApi} from "./subsciber/subscriberApi";
import {createWrapper} from "next-redux-wrapper";

export const makeStore = () => configureStore({
  reducer: {
    [siteDetailsApi.reducerPath]: siteDetailsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [subscriberApi.reducerPath]: subscriberApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(siteDetailsApi.middleware)
      .concat(productApi.middleware)
      .concat(subscriberApi.middleware)
      .concat(messageApi.middleware),

})
setupListeners(makeStore().dispatch)
export const wrapper = createWrapper(makeStore);