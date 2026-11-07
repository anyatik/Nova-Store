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
  }),
});

export const { useGetCategoriesQuery } = catalogApi;
