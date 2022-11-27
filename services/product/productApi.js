import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";
import {HYDRATE} from "next-redux-wrapper";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customBaseQuery,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProductCategories: builder.query({
      query: () => ({
        url: API.productCategories,
        method: "GET"
      })
    }),
    getCategoryByName: builder.query({
      query: (name) => ({
        url: API.productCategories + "?name=" + name,
        method: "GET"
      })
    }),
    getProducts: builder.query({
      query: () => ({
        url: API.products,
        method: "GET"
      })
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: API.products + id,
        method: "GET"
      })
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: API.products + "category/" + category,
        method: "GET"
      })
    }),
    getProductsByCategoryName: builder.query({
      query: (name) => ({
        url: API.products + "?category=" + name,
        method: "GET"
      })
    }),
  })
})
export const {
  useGetProductCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByCategoryNameQuery,
  useGetCategoryByNameQuery,
  util: {getRunningQueriesThunk},
} = productApi;

// export const {getProductsByCategory} = productApi.endpoints;
