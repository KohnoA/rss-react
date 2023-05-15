import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateCard from './CreateCard';
import { renderWithProvider } from 'src/tests/renderWithProvider';

describe('testing CreateCard component', () => {
  beforeEach(() => renderWithProvider(<CreateCard />));

  it('should be displayed', () => {
    expect(screen.getByTestId('create-card')).toBeInTheDocument();
    expect(screen.getByLabelText(/Product name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rate/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of purchase/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Photo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Tags/i)).toBeInTheDocument();
    expect(screen.getByText(/Condition/i)).toBeInTheDocument();
    expect(screen.getByText(/Create New Card/i)).toBeInTheDocument();
  });

  it('You cannot submit an empty form, all fields must be required', async () => {
    fireEvent.click(screen.getByText(/Create New Card/i));

    const InputsAndSelectErrors = await screen.findAllByText(/Please fill in the field/i);
    const GroupErrors = await screen.findAllByText(/Please select item/i);

    expect(InputsAndSelectErrors.length).toBe(6);
    expect(GroupErrors.length).toBe(2);
  });

  it('if the product name is not capitalized, error message should be displayed', async () => {
    const nameInput = screen.getByLabelText(/Product name/i);

    fireEvent.change(nameInput, {
      target: { value: 'iphone x' },
    });
    fireEvent.click(screen.getByText(/Create New Card/i));

    const errorMessage = await screen.findByText(/Must start with a capital letter/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('if an out-of-range rating value is entered, an error message should be displayed', async () => {
    const rateInput = screen.getByLabelText(/Rate/i);

    fireEvent.change(rateInput, {
      target: { value: '6' },
    });
    fireEvent.click(screen.getByText(/Create New Card/i));

    expect(await screen.findByText(/Maximum possible rating: 5/i)).toBeInTheDocument();

    fireEvent.change(rateInput, {
      target: { value: '0' },
    });
    fireEvent.click(screen.getByText(/Create New Card/i));

    expect(await screen.findByText(/Minimum possible rating: 1/i)).toBeInTheDocument();
  });

  it('Upon successful submission of the form, a confimation message is shown', async () => {
    const fakeFile = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    URL.createObjectURL = function (file) {
      return file.toString();
    };

    fireEvent.change(screen.getByLabelText(/Product name/i), {
      target: { value: 'IPhone X' },
    });
    fireEvent.change(screen.getByLabelText(/Price/i), {
      target: { value: '299.99' },
    });
    fireEvent.change(screen.getByLabelText(/Rate/i), {
      target: { value: '4.5' },
    });
    fireEvent.change(screen.getByLabelText(/Date of purchase/i), {
      target: { value: '2023-12-12' },
    });
    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: 'electronics' },
    });
    fireEvent.click(screen.getByLabelText(/New/i));
    fireEvent.click(screen.getByLabelText(/I want to sell urgently/i));
    await userEvent.upload(screen.getByLabelText(/Photo/i), fakeFile);

    fireEvent.click(screen.getByText(/Create New Card/i));

    expect(await screen.findByText(/Card created/i)).toBeInTheDocument();
  });
});
