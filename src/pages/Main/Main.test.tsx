import { screen } from '@testing-library/react';
import Main from './Main';
import { renderWithProvider } from 'src/tests/renderWithProvider';

describe('testing Main component', () => {
  it('should be displayed', () => {
    renderWithProvider(<Main />);

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
