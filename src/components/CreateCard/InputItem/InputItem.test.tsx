import { render, screen } from '@testing-library/react';
import React from 'react';
import InputItem from './InputItem';
import { InputItemProps } from './InputItem';

const mockInputItem: InputItemProps = {
  id: 'test',
  type: 'text',
  label: 'Test lebel',
  innerRef: React.createRef(),
  isValid: true,
  placeholder: 'Test placeholder',
};

describe('testing inputItem component', () => {
  const label = new RegExp(`${mockInputItem.label}`, 'i');
  const input = new RegExp(`${mockInputItem.placeholder}`, 'i');

  it('should be displayed', () => {
    render(<InputItem {...mockInputItem} />);

    expect(screen.getByTestId('input-item')).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(input)).toBeInTheDocument();
  });

  it('An error should be displayed if the value is not valid', () => {
    mockInputItem.isValid = false;
    render(<InputItem {...mockInputItem} />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
