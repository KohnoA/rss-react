import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { IProduct } from 'src/types/IProduct';
import axios from 'axios';
import { vi } from 'vitest';

describe('testing CardList component', () => {
  vi.mock('axios');
  const mockAxios = axios as jest.Mocked<typeof axios>;

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

  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  afterAll(() => {
    vi.clearAllMocks;
    vi.resetAllMocks;
  });

  it('should be displayed', () => {
    render(<CardList cardsData={mockData} />);

    expect(screen.getByTestId('card-list')).toBeInTheDocument();
  });

  it('should display a list of cards', async () => {
    render(<CardList cardsData={mockData} />);

    const cardsData = screen.getAllByTestId('card');
    expect(cardsData.length).toBe(mockData.length);
  });

  it('clicking on the card should show the details', async () => {
    mockAxios.get.mockResolvedValue({ data: mockData[0] });
    render(<CardList cardsData={mockData} />);

    fireEvent.click(screen.getAllByTestId('card')[0]);

    await waitFor(() => {
      expect(screen.getByTestId('details')).toBeInTheDocument();
    });
  });

  it('if there is no data, a message should be displayed', () => {
    render(<CardList cardsData={[]} emptyMessage="Test message" />);

    expect(screen.getByText(/Test message/i)).toBeInTheDocument();
  });
});
