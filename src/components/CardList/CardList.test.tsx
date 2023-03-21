import { render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import axios from 'axios';
import { vi } from 'vitest';
import { IProduct } from 'src/types/IProduct';
import { act } from 'react-dom/test-utils';

describe('testing CardList component', () => {
  vi.mock('axios');
  const response: IProduct[] = [
    {
      id: 1,
      image: '../../assets/images/mock.jpg',
      title: 'Mock Item1',
      category: 'Mock category1',
      price: 45.99,
      description: 'mock desc1',
      rating: {
        rate: 5,
        count: 10,
      },
    },
    {
      id: 2,
      image: '../../assets/images/mock.jpg',
      title: 'Mock Item1',
      category: 'Mock category1',
      price: 46.99,
      description: 'mock desc2',
      rating: {
        rate: 6,
        count: 11,
      },
    },
    {
      id: 3,
      image: '../../assets/images/mock.jpg',
      title: 'Mock Item1',
      category: 'Mock category1',
      price: 47.99,
      description: 'mock desc3',
      rating: {
        rate: 7,
        count: 12,
      },
    },
  ];

  afterAll(() => {
    vi.clearAllMocks;
    vi.resetAllMocks;
  });

  it('should be displayed', async () => {
    act(() => {
      (axios as jest.Mocked<typeof axios>).get.mockResolvedValue({ data: response });
      render(<CardList />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('card-list')).toBeInTheDocument();
    });
  });

  it('should display a list of cards', async () => {
    act(() => {
      (axios as jest.Mocked<typeof axios>).get.mockResolvedValue({ data: response });
      render(<CardList />);
    });

    await waitFor(() => {
      const cardsData = screen.getAllByTestId('card');
      expect(cardsData.length).toBe(12);
    });
  });
});
