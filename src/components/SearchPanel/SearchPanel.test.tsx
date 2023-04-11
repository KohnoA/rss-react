import { fireEvent, render, screen } from '@testing-library/react';
import SearchPanel from './SearchPanel';
import { vi } from 'vitest';

const mockFunc = vi.fn();

describe('testing SearchPanel component', () => {
  it('should be displayed', () => {
    render(<SearchPanel changeFilter={mockFunc} />);

    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('should be displayed correctly, with cross and search button', () => {
    render(<SearchPanel changeFilter={mockFunc} />);

    expect(screen.getByPlaceholderText(/I want to find.../i)).toBeInTheDocument();
    expect(screen.getByTestId('clean-button')).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('the cross and search button should be displayed if input is not empty', () => {
    render(<SearchPanel changeFilter={mockFunc} />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });

    expect(screen.getByTestId('clean-button')).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('the input should be cleared when you click on the cross', () => {
    render(<SearchPanel changeFilter={mockFunc} />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });
    fireEvent.click(screen.getByTestId('clean-button'));

    expect(input).toHaveValue('');
  });

  it('When the component is unmounted, the form value must be preserved', () => {
    const { unmount } = render(<SearchPanel changeFilter={mockFunc} />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });

    unmount();
    render(<SearchPanel changeFilter={mockFunc} />);

    expect(input).toHaveValue('T-Shirt');
  });
});
