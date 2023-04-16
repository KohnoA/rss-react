import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    saveSearchValue(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
    deleteSearchValue(state) {
      return (state = '');
    },
  },
});

export const { saveSearchValue, deleteSearchValue } = searchSlice.actions;
