// endpoints to work with backend
import { apiSlice } from "./apiSlice";  /* eslint-disable no-unused-vars */

const USERS_URL = "/api/auth";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: credentials,
      }),
    }),
    changePassword: builder.mutation({
      query: (credentials) => {
        return {
          url: `${USERS_URL}/change-password`,
          method: "POST",
          body: credentials,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useChangePasswordMutation } = usersApiSlice;