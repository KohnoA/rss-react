import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchPanel from './SearchPanel';

describe('testing SearchPanel component', () => {
  it('should be displayed', () => {
    render(<SearchPanel />);

    expect(screen.getByTestId('search-panel')).toBeInTheDocument();
  });

  it('should be displayed correctly, without cross and search button', () => {
    render(<SearchPanel />);

    expect(screen.getByPlaceholderText(/I want to find.../i)).toBeInTheDocument();
    expect(screen.queryByTestId('clean-button')).toBeNull();
    expect(screen.queryByText(/Search/i)).toBeNull();
  });

  it('the cross and search button should be displayed if input is not empty', async () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    await userEvent.type(input, 'T-Shirt');

    expect(screen.getByTestId('clean-button')).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it('the input should be cleared when you click on the cross', async () => {
    render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    await userEvent.type(input, 'T-Shirt');
    await userEvent.click(screen.getByTestId('clean-button'));

    expect(input).toHaveValue('');
  });

  it('When the component is unmounted, the form value must be preserved', async () => {
    const { unmount } = render(<SearchPanel />);
    const input = screen.getByPlaceholderText(/I want to find.../i);

    await userEvent.type(input, 'T-Shirt');

    unmount();
    render(<SearchPanel />);

    expect(input).toHaveValue('T-Shirt');
  });
});
