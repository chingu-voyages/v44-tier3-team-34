// untested. to be refined

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      console.log("payload: ", action.payload);
      state.posts = action.payload;
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
});

export const { setPosts, clearPosts } = postsSlice.actions;

export default postsSlice.reducer;