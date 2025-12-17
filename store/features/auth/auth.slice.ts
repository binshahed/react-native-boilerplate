import { ASYNC_STORAGE_CODE } from '@/constants/AsyncStorageCode';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeUser } from '@/types';



interface AuthState {
  isAuthenticated: boolean;
  user: TypeUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ user: TypeUser; token: string; isAuthenticated: boolean }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.token as string;
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user = { ...state.user, avatar: action.payload };
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY);
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY);
    },
    resetAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});
export const {
  setAuth,
  logout,
  setAccessToken,
  setRefreshToken,
  setUser,
  setIsAuthenticated,
  resetAuth,
  setUserAvatar,
} = authSlice.actions;
export default authSlice.reducer;
