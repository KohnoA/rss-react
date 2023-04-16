import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'src/types/IProduct';

const API_BASE_URL = 'https://mock-server-api-alpha.vercel.app';
const API_ENDPOINT_CATALOG = '/catalog';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], string>({
      query: (filter?: string, page = 1, limit = 12) => ({
        url: API_ENDPOINT_CATALOG,
        params: {
          q: filter ?? undefined,
          _page: page,
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
