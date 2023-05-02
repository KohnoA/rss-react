import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './slices/searchSlice';
import { userSlice } from './slices/userSlice';
import { productApi } from 'src/services/ProductService';
import { paginationSlice } from './slices/paginationSlice';
import { cardDetailsSlice } from './slices/cardDetailsSlice';

const rootReducer = combineReducers({
  [searchSlice.name]: searchSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [paginationSlice.name]: paginationSlice.reducer,
  [cardDetailsSlice.name]: cardDetailsSlice.reducer,
  [productApi.reducerPath]: productApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),

    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
