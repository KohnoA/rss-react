import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('testing NotFound component', () => {
  it('should be displayed', () => {
    render(<NotFound />);

    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
