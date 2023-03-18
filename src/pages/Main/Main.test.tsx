import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('testing Main component', () => {
  it('should be displayed', () => {
    render(<Main />);

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
