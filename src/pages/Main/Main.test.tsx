import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('testing Main component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it('should be displayed'),
    () => {
      expect(screen.getByTestId('page-main')).toBeInTheDocument();
    };

  it('should be displayed correctly', () => {
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
    expect(screen.getByTestId('card-list')).toBeInTheDocument();
  });
});
