import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NetworkState {
  isNetworkConnected: boolean;
  networkMessage: string;
}

const initialState: NetworkState = {
  isNetworkConnected: true,
  networkMessage: '',
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetworkConnected: (state, action: PayloadAction<boolean>) => {
      state.isNetworkConnected = action.payload;
    },
    updateNetworkMessage: (state, action: PayloadAction<string>) => {
      state.networkMessage = action.payload;
    },
    updateNetworkConnected: (state, action: PayloadAction<boolean>) => {
      state.isNetworkConnected = action.payload;
    },
  },
});

export const { setNetworkConnected, updateNetworkMessage, updateNetworkConnected } =
  networkSlice.actions;
export default networkSlice.reducer;
