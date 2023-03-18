import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('testing NotFound component', () => {
  test('should be displayed', () => {
    render(<NotFound />);

    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
  });
});
