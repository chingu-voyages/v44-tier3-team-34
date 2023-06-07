import { apiSlice } from "./apiSlice"; 

const PROFILES_URL = "/api/profiles";

export const profilesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => ({
        url: `${PROFILES_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
    }),
    getProfile: builder.query({
      query: (userId) => ({
        url: `${PROFILES_URL}/${userId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileQuery,
} = profilesApiSlice;