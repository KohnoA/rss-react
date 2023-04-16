import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'src/types/IProduct';
import {
  API_BASE_URL,
  API_ENDPOINT_CATALOG,
  LIMIT_ITEMS_IN_CARD_LIST,
} from 'src/constants/constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: (filter?: string, page = 1, limit?: number) => ({
        url: API_ENDPOINT_CATALOG,
        params: {
          q: filter ?? undefined,
          _page: page,
          _limit: limit ?? LIMIT_ITEMS_IN_CARD_LIST,
        },
      }),
      providesTags: ['Product'],
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id: number) => ({
        url: `${API_ENDPOINT_CATALOG}/${id}`,
      }),
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
