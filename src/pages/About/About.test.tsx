import { render, screen } from '@testing-library/react';
import About from './About';

describe('testing About component', () => {
  it('should be displayed', () => {
    render(<About />);

    expect(screen.getByTestId('page-about')).toBeInTheDocument();
    expect(screen.getByTestId('about-description')).toBeInTheDocument();
  });
});
