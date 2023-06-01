import { apiSlice } from "./apiSlice"; 

const POSTS_URL = "/api/posts";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `${POSTS_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
      providesTags: ["Posts"],
    }),
    getPost: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: `${POSTS_URL}`,
        method: "POST",
        body: postData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: ({ postId, postData }) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "PUT",
        body: postData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApiSlice;