import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InputItem from './InputItem';
import { InputItemProps } from './InputItem';

const mockInput: InputItemProps = {
  id: 'test',
  type: 'text',
  label: 'Test lebel',
  innerRef: React.createRef(),
  isValid: true,
  placeholder: 'Test placeholder',
};

describe('testing inputItem component', () => {
  const label = new RegExp(`${mockInput.label}`, 'i');
  const input = new RegExp(`${mockInput.placeholder}`, 'i');

  it('should be displayed', () => {
    render(<InputItem {...mockInput} />);

    expect(screen.getByTestId('input-item')).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(input)).toBeInTheDocument();
  });

  it('An error should be displayed if the value is not valid', () => {
    mockInput.isValid = false;
    render(<InputItem {...mockInput} />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
