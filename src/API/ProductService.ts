import axios from 'axios';
import { API_BASE_URL, DEFAULT_PAGE_LIMIT } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';
import { PSGetAllReturn } from 'src/types/types';

export default class ProductService {
  public static async getAll(filter?: string, page = 1, limit?: number): PSGetAllReturn {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: filter ? filter : undefined,
        _limit: limit ?? DEFAULT_PAGE_LIMIT,
        _page: page,
      },
    });

    return [response.data, response.headers['x-total-count']];
  }

  public static async getItem(id: number): Promise<IProduct> {
    const response = await axios.get(`${API_BASE_URL}/${id}`);

    return response.data;
  }
}
