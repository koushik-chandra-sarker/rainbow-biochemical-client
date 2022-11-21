import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../utils/customBaseQuery";
import {API} from "../utils/api.constant";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getProductCategories: builder.query({
      query: () => ({
        url: API.productCategories,
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
    })
  })
})
export const {
  useGetProductCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery
} = productApi;
