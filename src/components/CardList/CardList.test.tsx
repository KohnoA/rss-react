import { fireEvent, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { IProduct } from 'src/types/IProduct';
import { Mock, vi } from 'vitest';
import * as api from 'src/services/ProductService';
import { renderWithProvider } from 'src/tests/renderWithProvider';

const useGetProductQueryMock = vi.spyOn(api, 'useGetProductQuery');

describe('testing CardList component', () => {
  const mockData: IProduct[] = [
    {
      id: 1,
      title: 'iPhone 9',
      price: 549,
      image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      rate: 4.8,
      date: '12-12-2012',
      category: 'smartphones',
      condition: 'New',
      tags: ['urgently', 'bargain'],
    },
    {
      id: 2,
      title: 'iPhone X',
      price: 899,
      image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      rate: 4.4,
      date: '12-12-2012',
      category: 'smartphones',
      condition: 'New',
      tags: ['urgently'],
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: 1249,
      image: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      rate: 4.4,
      date: '12-12-2012',
      category: 'smartphones',
      condition: 'New',
      tags: [],
    },
  ];

  afterAll(() => {
    vi.clearAllMocks;
    vi.resetAllMocks;
  });

  it('should be displayed', () => {
    renderWithProvider(<CardList cardsData={mockData} />);

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
  });

  it('should display a list of cards', async () => {
    renderWithProvider(<CardList cardsData={mockData} />);

    const cardsData = screen.getAllByTestId('card');
    expect(cardsData.length).toBe(mockData.length);
  });

  it('clicking on the card should show the details', async () => {
    (useGetProductQueryMock as Mock).mockReturnValue({ data: mockData[0] });
    renderWithProvider(<CardList cardsData={mockData} />);

    fireEvent.click(screen.getAllByTestId('card')[0]);

    await waitFor(() => {
      expect(screen.getByTestId('details')).toBeInTheDocument();
    });
  });

  it('if there is no data, a message should be displayed', () => {
    renderWithProvider(<CardList cardsData={[]} emptyMessage="Test message" />);

    expect(screen.getByText(/Test message/i)).toBeInTheDocument();
  });
});
