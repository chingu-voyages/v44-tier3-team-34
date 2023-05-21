// endpoints to work with backend
import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/auth";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: credentials,
      })
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;