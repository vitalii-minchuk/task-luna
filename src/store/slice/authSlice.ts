/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from '../../types';

const initialState: AuthStateType = {
  isLoading: false,
  fetchError: '',
  accessToken: 'fff',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state) {
      state.isLoading = true;
    },
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
