import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './operations.js';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;

        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(loginUser.pending, state => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;

        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(refreshUser.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;

        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })

      .addCase(logoutUser.pending, state => {
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
