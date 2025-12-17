import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from './features/counter/counter.slice';
import { api } from './features/api/api';
import authSlice from './features/auth/auth.slice';
import networkSlice from './features/network/network.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
    auth: authSlice,
    network: networkSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  // Default middleware from RTK is sufficient for most apps.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
