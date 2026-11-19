import { api } from "./api";

export const ordersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    getOrdersById: build.query({
      query: ({ id }) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrdersByIdQuery } = ordersApi;
