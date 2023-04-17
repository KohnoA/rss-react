import { screen, waitFor } from '@testing-library/react';
import CardDetails from './CardDetails';
import { Mock, vi } from 'vitest';
import { IProduct } from 'src/types/IProduct';
import { renderWithProvider } from 'src/tests/renderWithProvider';
import * as api from 'src/services/ProductService';

const useGetProductQueryMock = vi.spyOn(api, 'useGetProductQuery');

describe('testing CardDetails component', () => {
  const mockData: IProduct = {
    id: 1,
    title: 'Test title',
    price: 299,
    rate: 5,
    category: 'Test category',
    date: '12-12-2023',
    tags: ['bragain'],
    image: '../../assets/icons/cross',
    condition: 'New',
    description: 'Test description',
  };

  afterAll(() => {
    vi.clearAllMocks;
    vi.resetAllMocks;
  });

  it('should be displayed', async () => {
    (useGetProductQueryMock as Mock).mockReturnValue({ data: mockData });
    renderWithProvider(<CardDetails id={mockData.id} />);

    await waitFor(() => {
      expect(screen.getByTestId('details')).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.title}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.condition}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.category}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.price}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.description}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`${mockData.tags.join('|')}`, 'i'))).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`${mockData.date.replace(/-/g, '.')}`, 'i'))
      ).toBeInTheDocument();
      expect(screen.getByTestId('details-image')).toHaveStyle({
        backgroundImage: mockData.image,
      });
    });
  });

  it('Should show error on request error', async () => {
    (useGetProductQueryMock as Mock).mockReturnValue({ isError: true });
    renderWithProvider(<CardDetails id={mockData.id} />);

    await waitFor(() => {
      expect(
        screen.getByText(/Something went wrong, please try again later./i)
      ).toBeInTheDocument();
    });
  });
});
