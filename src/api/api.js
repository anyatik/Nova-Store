import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://store.bellkyn.netcraze.pro/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("autorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Category", "Auth"],
});
