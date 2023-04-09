import axios from 'axios';
import { API_BASE_URL } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';

export default class ProductService {
  public static async getAll(filter?: string, page = 1, limit = 12): Promise<IProduct[]> {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: filter ? filter : undefined,
        _limit: limit,
        _page: page,
      },
    });

    return response.data;
  }
}
