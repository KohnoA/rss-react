import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { START_PAGE } from 'src/constants/constants';

export interface IPaginationState {
  mainCardList: number;
  formCardList: number;
}

const initialState: IPaginationState = {
  mainCardList: START_PAGE,
  formCardList: START_PAGE,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageInMainCardList(state, action: PayloadAction<number>) {
      state.mainCardList = action.payload;
    },
    setPageInFormCardList(state, action: PayloadAction<number>) {
      state.formCardList = action.payload;
    },
  },
});

export const { setPageInMainCardList, setPageInFormCardList } = paginationSlice.actions;
