import { api } from "./api";

export const cartApi = api.injectEndpoints({
  endpoints: (build) => ({
    addItemToCart: build.mutation({
      query: ({ productId }) => ({
        url: "/cart/items",
        method: "POST",
        body: { productId, quantity: 1 },
      }),
      invalidatesTags: ["Cart"],
    }),
    getCart: build.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    deleteItemFromCart: build.mutation({
      query: ({ productId }) => ({
        url: `/cart/items/${productId}`,
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    changeQuantityItem: build.mutation({
      query: ({ productId, quantity }) => ({
        url: `/cart/items/${productId}`,
        method: "PATCH",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddItemToCartMutation,
  useGetCartQuery,
  useDeleteItemFromCartMutation,
  useChangeQuantityItemMutation,
} = cartApi;
