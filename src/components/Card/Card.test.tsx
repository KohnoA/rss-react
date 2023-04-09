import { render, screen } from '@testing-library/react';
import { IProduct } from 'src/types/IProduct';
import Card from './Card';

const mockData: IProduct = {
  id: 1,
  title: 'iPhone 9',
  price: 549,
  image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  rate: 4.8,
  date: '12-12-2012',
  category: 'smartphones',
  condition: 'New',
  tags: ['urgently', 'bargain'],
};

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
    expect(screen.getByTestId('card-date')).toContainHTML(
      `Date: ${mockData.date.replace(/-/g, '.')}`
    );
    expect(screen.getByTestId('card-image')).toHaveStyle({
      backgroundImage: mockData.image,
    });
  });

  it('should be display tags', () => {
    expect(screen.getByTestId('card-bargain')).toBeInTheDocument();
    expect(screen.getByTestId('card-urgently')).toBeInTheDocument();
  });
});
