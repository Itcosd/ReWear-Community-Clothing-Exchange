import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/items/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products/",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
