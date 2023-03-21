import { render, screen, waitFor } from '@testing-library/react';
import CardList from './CardList';
import { PRODUCTS_DATA } from 'src/constants/productsData';

describe('testing CardList component', () => {
  it('should be displayed', async () => {
    render(<CardList />);

    await waitFor(() => {
      expect(screen.getByTestId('card-list')).toBeInTheDocument();
    });
  });

  it('should display a list of cards', async () => {
    render(<CardList />);

    const cardsData = screen.getAllByTestId('card');
    expect(cardsData.length).toBe(PRODUCTS_DATA.length);
  });
});
