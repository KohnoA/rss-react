import { fireEvent, screen } from '@testing-library/react';
import SearchPanel from './SearchPanel';
import { renderWithProvider } from 'src/tests/renderWithProvider';

describe('testing SearchPanel component', () => {
  it('should be displayed', () => {
    renderWithProvider(<SearchPanel />);

    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('should be displayed correctly, with cross and search button', () => {
    renderWithProvider(<SearchPanel />);

    expect(screen.getByPlaceholderText(/I want to find.../i)).toBeInTheDocument();
    expect(screen.getByTestId('clean-button')).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('the cross and search button should be displayed if input is not empty', () => {
    renderWithProvider(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });

    expect(screen.getByTestId('clean-button')).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('the input should be cleared when you click on the cross', () => {
    renderWithProvider(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });
    fireEvent.click(screen.getByTestId('clean-button'));

    expect(input).toHaveValue('');
  });

  it('When the component is unmounted, the form value must be preserved', () => {
    const { unmount } = renderWithProvider(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    fireEvent.change(input, {
      target: { value: 'T-Shirt' },
    });

    unmount();
    renderWithProvider(<SearchPanel />);

    expect(input).toHaveValue('T-Shirt');
  });
});
