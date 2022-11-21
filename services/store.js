import {configureStore} from "@reduxjs/toolkit";

import {siteDetailsApi} from "./siteDetails/siteDetailsApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productApi} from "./product/productApi";
import {messageApi} from "./message/messageApi";
import {subscriberApi} from "./subsciber/subscriberApi";

export const store = configureStore({
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
setupListeners(store.dispatch)