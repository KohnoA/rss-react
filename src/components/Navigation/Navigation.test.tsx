import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from 'src/App';
import Navigation from './Navigation';

describe('testing Navigation component', () => {
  it('should be displayed', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('nav-main-link')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about-link')).toBeInTheDocument();
  });

  it('route transitions should work correctly', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('nav-main-link');
    const aboutLink = screen.getByTestId('nav-about-link');

    await userEvent.click(aboutLink);
    expect(screen.getByTestId('page-about')).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId('page-main')).toBeInTheDocument();
  });
});
