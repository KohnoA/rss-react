import { render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { IProduct } from 'src/types/IProduct';

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

describe('testing CardList component', () => {
  it('should be displayed', async () => {
    render(<CardList cardsData={mockData} />);

    await waitFor(() => {
      expect(screen.getByTestId('card-list')).toBeInTheDocument();
    });
  });

  it('should display a list of cards', async () => {
    render(<CardList cardsData={mockData} />);

    const cardsData = screen.getAllByTestId('card');
    expect(cardsData.length).toBe(mockData.length);
  });
});
