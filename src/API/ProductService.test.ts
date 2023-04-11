import ProductService from './ProductService';
import axios from 'axios';
import { vi } from 'vitest';

vi.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('testing PrdouctService', () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  it('testing ProductService.getAll', async () => {
    const mockData = [
      { id: 1, title: 'test1' },
      { id: 2, title: 'test2' },
    ];

    mockAxios.get.mockResolvedValue({ data: mockData });

    const responseData = await ProductService.getAll();

    expect(mockAxios.get).toBeCalledTimes(1);
    expect(responseData).toStrictEqual(mockData);
  });

  it('testing ProductService.getItem', async () => {
    const mockData = { id: 1, title: 'test1' };
    const expectedId = 1;

    mockAxios.get.mockResolvedValue({ data: mockData });

    const responseData = await ProductService.getItem(expectedId);

    expect(mockAxios.get).toBeCalledTimes(1);
    expect(responseData).toStrictEqual(mockData);
  });
});
