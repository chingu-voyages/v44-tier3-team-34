// this file creates functions that can be used to make api calls to the backend for posts
// they are exported as hooks and can be used in components
// the use...Query functions are used to make GET requests
// the use...Mutation functions are used to make POST, PUT, and DELETE requests
// the naming convention is use[function name][request type] from Redux Toolkit
// these functions provide loading, error, and data states to components that use them
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
    addComment: builder.mutation({
      query: (commentData) => ({
        url: `${POSTS_URL}/${commentData.postId}/comments`,
        method: "POST",
        body: { text: commentData.text },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteComment: builder.mutation({
      query: ({postId, commentId}) => ({
        url: `${POSTS_URL}/${postId}/comments/${commentId}`,
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
  useAddCommentMutation,
  useDeleteCommentMutation,
} = postsApiSlice;