import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './reducers/searchSlice';
import { userSlice } from './reducers/userSlice';
import { productApi } from 'src/services/ProductService';

const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
