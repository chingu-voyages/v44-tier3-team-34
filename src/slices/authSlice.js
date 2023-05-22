import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode'

const initialState = {
  userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null,
  user: localStorage.getItem('userToken') ? jwt_decode(localStorage.getItem('userToken')).user : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userToken = action.payload.token;
      state.user = jwt_decode(action.payload.token).user;
      localStorage.setItem('userToken', (action.payload.token));
    },
    logout: (state) => {
      state.userToken = null;
      localStorage.removeItem('userToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;