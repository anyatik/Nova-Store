import { api } from "./api";

export const catalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      transformResponse: (response) => response?.items,
      providesTags: ["Category"],
    }),
    getProducts: build.query({
      query: ({ page, limit }) => ({
        url: "/products",
        method: "GET",
        params: { page, limit },
      }),
      transformResponse: (response) => response?.items,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = catalogApi;
