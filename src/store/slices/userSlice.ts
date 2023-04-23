import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LIMIT_ITEMS_IN_CARD_LIST } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';

interface IUserState {
  cards: Array<IProduct[]>;
}

const initialState: IUserState = {
  cards: [[]],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserCard(state, action: PayloadAction<IProduct>) {
      const currentPage = state.cards.find((page) => page.length < LIMIT_ITEMS_IN_CARD_LIST);

      currentPage ? currentPage.push(action.payload) : state.cards.push([action.payload]);
    },
  },
});

export const { addUserCard } = userSlice.actions;
