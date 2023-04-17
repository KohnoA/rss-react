import { screen } from '@testing-library/react';
import Form from './Form';
import { renderWithProvider } from 'src/tests/renderWithProvider';

describe('testing Form component', () => {
  beforeEach(() => {
    renderWithProvider(<Form />);
  });

  it('should be displayed', () => {
    expect(screen.getByTestId('page-form')).toBeInTheDocument();
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
    expect(screen.getByText(/Your cards/i)).toBeInTheDocument();
  });

  it('A message should be displayed if there is no user card data', () => {
    expect(screen.getByText(/No cards yet/i)).toBeInTheDocument();
  });
});
