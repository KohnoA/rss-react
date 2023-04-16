import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducers/searchSlice';
import { productApi } from 'src/services/ProductService';

const store = configureStore({
  reducer: {
    search: searchSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
