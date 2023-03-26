import { render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { PRODUCTS_DATA } from 'src/constants/productsData';
import { IProduct } from 'src/types/IProduct';

const mockData: IProduct[] = PRODUCTS_DATA.filter((_, index) => index < 3);

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
