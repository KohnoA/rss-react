import { render, screen } from '@testing-library/react';
import { IProduct } from 'src/types/IProduct';
import Card from './Card';
import { PRODUCTS_DATA } from 'src/constants/productsData';

const mockData: IProduct = PRODUCTS_DATA[0];

describe('testing Card component', () => {
  beforeEach(() => {
    render(<Card data={mockData} />);
  });

  it('should be displayed', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('should display correctly', () => {
    expect(screen.getByText(new RegExp(`${mockData.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockData.condition}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(mockData.category)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockData.price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('card-rate')).toContainHTML(`Rate: ${mockData.rate}`);
    expect(screen.getByTestId('card-date')).toContainHTML(`Date: ${mockData.date}`);
    expect(screen.getByTestId('card-image')).toHaveStyle({
      backgroundImage: mockData.image,
    });
  });

  it('should be display tags', () => {
    expect(screen.getByTestId('card-bargain')).toBeInTheDocument();
    expect(screen.getByTestId('card-urgently')).toBeInTheDocument();
  });
});
