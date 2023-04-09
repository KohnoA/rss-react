import { render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

describe('testing Main component', () => {
  it('should be displayed', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
