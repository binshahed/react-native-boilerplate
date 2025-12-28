import { ASYNC_STORAGE_CODE } from '@/constants/AsyncStorageCode';
import { logout, setTokens } from '@/store/features/auth/auth.slice';
import type { LoginResponse } from '@/store/features/auth/auth.type';
import type { RootState } from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  type BaseQueryFn,
  createApi,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

interface TokenResponse {
  statusCode: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

const baseUrl = 'https://api.example.com';

// Create base query with custom error handling
const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    // Prefer token from Redux, fall back to AsyncStorage for initial load
    const state = getState() as RootState;
    let token = state.auth.accessToken;

    if (!token) {
      token = await AsyncStorage.getItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY);
    }

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Create base query without authentication for refresh token requests
const baseQueryWithoutAuth = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

// Create wrapper for baseQuery with 401 handling
const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 || (result?.error?.data as TokenResponse)?.statusCode === 401) {
    const refreshResult = await baseQueryWithoutAuth(
      {
        url: '/api/method/excel_restaurant_pos.api.auth.token.refresh',
        method: 'POST',
        body: {
          refresh_token: await AsyncStorage.getItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY),
        },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // update the token
      const tokenData = refreshResult.data;

      // Handle both response structures
      let accessToken: string | undefined;
      let refreshToken: string | undefined;

      // Check for TokenResponse structure (data.accessToken)
      if (
        typeof tokenData === 'object' &&
        tokenData !== null &&
        'data' in tokenData &&
        typeof (tokenData as TokenResponse).data === 'object' &&
        (tokenData as TokenResponse).data?.accessToken
      ) {
        const tokenResponse = tokenData as TokenResponse;
        accessToken = tokenResponse.data.accessToken;
        refreshToken = tokenResponse.data.refreshToken;
      }
      // Check for LoginResponse structure (message.data.access_token)
      else if (
        typeof tokenData === 'object' &&
        tokenData !== null &&
        'message' in tokenData &&
        typeof (tokenData as LoginResponse).message === 'object' &&
        (tokenData as LoginResponse).message?.data
      ) {
        const loginResponse = tokenData as LoginResponse;
        accessToken = loginResponse.message.data.access_token;
        refreshToken = loginResponse.message.data.refresh_token;
      }

      if (accessToken && refreshToken) {
        await AsyncStorage.setItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY, accessToken);
        await AsyncStorage.setItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY, refreshToken);

        api.dispatch(
          setTokens({
            accessToken,
            refreshToken,
          })
        );
        // retry the initial request
        return baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

// Create and expose api
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: ['auth', 'users', 'OrderItems'],
});
