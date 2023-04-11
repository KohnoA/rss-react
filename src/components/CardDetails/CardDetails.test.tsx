import { render, screen, waitFor } from '@testing-library/react';
import CardDetails from './CardDetails';
import axios from 'axios';
import { vi } from 'vitest';
import { IProduct } from 'src/types/IProduct';

describe('testing CardDetails component', () => {
  vi.mock('axios');
  const mockAxios = axios as jest.Mocked<typeof axios>;

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

  const renderComponent = () => render(<CardDetails id={mockData.id} />);

  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  afterAll(() => {
    vi.clearAllMocks;
    vi.resetAllMocks;
  });

  it('should be displayed', async () => {
    mockAxios.get.mockResolvedValue({ data: mockData });
    renderComponent();

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
    mockAxios.get.mockRejectedValue({ message: 'Test error' });
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText(/Test error/i)).toBeInTheDocument();
    });
  });
});
