import { FAKESTORE_API } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';
import axios from 'axios';

export async function getProducts(): Promise<IProduct[] | null> {
  try {
    const { data } = await axios.get(FAKESTORE_API);

    return data;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);

    return null;
  }
}
