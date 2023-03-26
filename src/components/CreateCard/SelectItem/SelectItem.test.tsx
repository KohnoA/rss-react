import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectItem, { SelectItemProps } from './SelectItem';

const mockSelectItem: SelectItemProps = {
  id: 'Test',
  label: 'Test label',
  options: ['Test1', 'Test2', 'Test3'],
  innerRef: React.createRef(),
  isValid: true,
};

describe('testing SelectItem component', () => {
  const label = new RegExp(`${mockSelectItem.label}`, 'i');

  it('should be displayed', () => {
    render(<SelectItem {...mockSelectItem} />);

    expect(screen.getByTestId('select-item')).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getAllByTestId('select-item-option').length).toBe(mockSelectItem.options.length);
  });

  it('An error should be displayed if the value is not valid', () => {
    mockSelectItem.isValid = false;
    render(<SelectItem {...mockSelectItem} />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
