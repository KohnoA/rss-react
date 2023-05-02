import { getAllProductsArgs, getAllProductsReturn } from 'src/types/IProductService';
import { IProduct } from 'src/types/IProduct';
import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import {
  API_BASE_URL,
  API_ENDPOINT_CATALOG,
  LIMIT_ITEMS_IN_CARD_LIST,
  START_PAGE,
  TOTAL_COUNT_DEFAULT_VALUE,
} from 'src/constants/constants';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({
    getAllProducts: builder.query<getAllProductsReturn, getAllProductsArgs>({
      query: ({ filter, page, limit }) => ({
        url: API_ENDPOINT_CATALOG,
        params: {
          q: filter ?? undefined,
          _page: page ?? START_PAGE,
          _limit: limit ?? LIMIT_ITEMS_IN_CARD_LIST,
        },
      }),
      transformResponse(response: IProduct[], meta): getAllProductsReturn {
        const headerTotalCount = meta?.response?.headers.get('X-Total-Count');
        return {
          response,
          totalCount: Number(headerTotalCount ?? TOTAL_COUNT_DEFAULT_VALUE),
        };
      },
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
