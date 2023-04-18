import { IProduct } from './IProduct';

export interface getAllProductsArgs {
  filter?: string;
  page?: number;
  limit?: number;
}

export interface getAllProductsReturn {
  response: IProduct[];
  totalCount: number;
}
