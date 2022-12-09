/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthStateType,
  RegisterUserInput,
  Shop,
  SubmitAuthFormResponse,
} from '../../types';

const initialState: AuthStateType = {
  isLoading: false,
  fetchError: '',
  accessToken: '',
  user: null,
  shop: null,
  google_token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, actions: PayloadAction<RegisterUserInput>) {
      state.user = actions.payload;
    },
    registerUser(state) {
      state.isLoading = true;
      state.fetchError = '';
    },
    registerUserSuccess(state, actions: PayloadAction<Shop>) {
      state.shop = actions.payload;
      state.isLoading = false;
    },
    registerUserFailure(state, actions: PayloadAction<string>) {
      state.user = null;
      state.fetchError = actions.payload || 'Something went wrong';
      state.isLoading = false;
    },
    fetchGoogleToken(state) {
      state.fetchError = '';
      state.isLoading = true;
    },
    fetchGoogleTokenSuccess(state, actions: PayloadAction<string>) {
      state.google_token = actions.payload;
      state.isLoading = false;
    },
    fetchGoogleTokenFailure(state, actions: PayloadAction<string>) {
      state.fetchError = actions.payload || 'Something went wrong';
      state.isLoading = false;
    },
    connectShop(state) {
      state.fetchError = '';
      state.isLoading = true;
    },
    connectShopSuccess(state, action: PayloadAction<SubmitAuthFormResponse>) {
      console.log(action.payload);
      if (action.payload.message === `Welcome ${state.user?.name}!`) {
        state.accessToken = 'Hello';
      } else {
        state.fetchError = 'Something went wrong';
      }
      state.isLoading = false;
    },
    connectShopFailure(state, actions: PayloadAction<string>) {
      state.fetchError = actions.payload || 'Something went wrong';
      state.isLoading = false;
    },
  },
});

export const {
  setUserData,
  registerUser,
  registerUserSuccess,
  registerUserFailure,
  fetchGoogleToken,
  fetchGoogleTokenFailure,
  fetchGoogleTokenSuccess,
  connectShop,
  connectShopFailure,
  connectShopSuccess,
} = authSlice.actions;

export default authSlice.reducer;
