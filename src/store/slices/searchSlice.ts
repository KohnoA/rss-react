import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchState {
  value: string;
}

const initialState: ISearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    deleteSearchValue(state) {
      state.value = '';
    },
  },
});

export const { saveSearchValue, deleteSearchValue } = searchSlice.actions;
