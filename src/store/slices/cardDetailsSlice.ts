import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICardDetailsState {
  cardId: number | null;
}

const initialState: ICardDetailsState = {
  cardId: null,
};

export const cardDetailsSlice = createSlice({
  name: 'cardDetails',
  initialState,
  reducers: {
    showDetails(state, action: PayloadAction<number>) {
      state.cardId = action.payload;
    },
    closeDetails(state) {
      state.cardId = null;
    },
  },
});

export const { showDetails, closeDetails } = cardDetailsSlice.actions;
