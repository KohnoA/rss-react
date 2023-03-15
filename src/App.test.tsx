import { render, screen } from '@testing-library/react';
import App from './App';

describe('test', () => {
  it('test test', () => {
    render(<App />);

    expect(screen.getByText(/Hello World !/i)).toBeInTheDocument();
  });
});
