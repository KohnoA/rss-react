import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'src/types/IProduct';

interface IUserState {
  cards: IProduct[];
}

const initialState: IUserState = {
  cards: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserCard(state, action: PayloadAction<IProduct>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addUserCard } = userSlice.actions;
