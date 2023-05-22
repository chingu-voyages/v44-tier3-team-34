import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// this file is like a parent for any other api slices
console.log("BASEURL: ", "start",import.meta.env.VITE_BASE_URL, "end");
const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({}),
});
