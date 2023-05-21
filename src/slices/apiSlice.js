import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// this file is like a parent for any other api slices

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3001' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
