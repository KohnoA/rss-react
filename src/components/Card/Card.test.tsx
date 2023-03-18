import { render, screen } from '@testing-library/react';
import { IProduct } from 'src/types/IProduct';
import Card from './Card';

const mockData: IProduct = {
  id: 1,
  image: '../../assets/images/mock.jpg',
  title: 'Mock Item',
  category: 'Mock category',
  price: 45.99,
  description: 'mock desc',
  rating: {
    rate: 5,
    count: 10,
  },
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
    expect(screen.getByText(mockData.category)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockData.price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('card-rate')).toContainHTML(`Rate: ${mockData.rating.rate}`);
    expect(screen.getByTestId('card-count')).toContainHTML(`Count: ${mockData.rating.count}`);
    expect(screen.getByTestId('card-image')).toHaveStyle({
      backgroundImage: mockData.image,
    });
  });
});
