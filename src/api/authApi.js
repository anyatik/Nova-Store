import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      transformResponse: (response) => response?.user,
      providesTags: ["Profile"],
    }),
    register: build.mutation({
      query: ({ email, password, name }) => ({
        url: "/auth/register",
        method: "POST",
        body: { email, password, name },
      }),
      invalidatesTags: ["Profile"],
    }),
    login: build.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, useLoginMutation, useRegisterMutation } =
  authApi;
