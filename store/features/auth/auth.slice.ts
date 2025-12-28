import { ASYNC_STORAGE_CODE } from '@/constants/AsyncStorageCode';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeUser } from '@/types';

interface AuthState {
  isLoggedIn: boolean;
  user: TypeUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      state.user = action.payload;
    },

    setTokens: (state, action) => {
      state.accessToken = action?.payload?.accessToken;
      state.refreshToken = action?.payload?.refreshToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY);
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY);
    },

    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action?.payload?.user;
      state.accessToken = action?.payload?.accessToken;
    },
  },
});
export const { logout, setUser, setTokens, login } = authSlice.actions;
export default authSlice.reducer;
