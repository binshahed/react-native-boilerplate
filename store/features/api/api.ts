import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { logout, setAccessToken, setRefreshToken } from '../auth/auth.slice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_CODE } from '@/constants/AsyncStorageCode';

import { updateNetworkConnected } from '../network/network.slice';

const baseUrl = 'https://api.boilerplate.com';

interface TokenResponse {
  statusCode: number;
  data: {
    token: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

const controller = new AbortController();

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  prepareHeaders: async (headers) => {
    const token = await AsyncStorage.getItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY);

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  signal: controller.signal,
});

// Create wrapper for baseQuery with 401 handling
const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // Get the base URL dynamically

  // If args is a string, prepend baseUrl. If it's FetchArgs, modify the url property
  const modifiedArgs: string | FetchArgs =
    typeof args === 'string'
      ? `${baseUrl}${args}`
      : { ...args, url: `${baseUrl}${args.url || ''}` };

  const result = await baseQuery(modifiedArgs, api, extraOptions);
  const refreshToken = await AsyncStorage.getItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY);

  console.log('result from baseQueryWithReAuth', result?.error);

  if (result?.data) {
    api.dispatch(updateNetworkConnected(true));
  }

  if (result?.error?.status === 'FETCH_ERROR') {
    console.log('Network Error from baseQueryWithReAuth', result?.error?.status);
    api.dispatch(updateNetworkConnected(false));
  }

  if (result?.error?.status === 401 || (result?.error?.data as TokenResponse)?.statusCode === 401) {
    const refreshResult = await baseQuery(
      {
        url: `${baseUrl}/v1/auth/refresh`,
        method: 'POST',
        body: { refreshToken: refreshToken },
      },
      api,
      extraOptions
    );

    if ((refreshResult?.data as TokenResponse)?.statusCode === 201) {
      // update the token
      AsyncStorage.setItem(
        ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY,
        (refreshResult?.data as TokenResponse)?.data?.token
      );
      api.dispatch(setAccessToken((refreshResult?.data as TokenResponse)?.data?.token));
      AsyncStorage.setItem(
        ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY,
        (refreshResult?.data as TokenResponse)?.data?.token
      );
      api.dispatch(setRefreshToken((refreshResult?.data as TokenResponse)?.data?.token));

      return baseQuery(modifiedArgs, api, extraOptions);
    } else {
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.ACCESS_TOKEN_KEY);
      AsyncStorage.removeItem(ASYNC_STORAGE_CODE.REFRESH_TOKEN_KEY);
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
  tagTypes: ['auth', 'users'],
});
