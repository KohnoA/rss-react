import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from 'src/App';

describe('testing AppRouter', () => {
  it('route "/" should lead to the main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
  });

  it('route "/about" should lead to the main page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-about')).toBeInTheDocument();
  });

  it('if the route is incorrect, the page not found is shown', () => {
    render(
      <MemoryRouter initialEntries={['/whfibcwiueiw']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
  });
});
