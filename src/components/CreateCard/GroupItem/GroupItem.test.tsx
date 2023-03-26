import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupItem from './GroupItem';
import { GroupItemProps } from './GroupItem';

const mockGroupItem: GroupItemProps = {
  caption: 'Test:',
  type: 'checkbox',
  isValid: true,
  items: [
    { label: 'test1', innerRef: React.createRef() },
    { label: 'test2', innerRef: React.createRef() },
  ],
};

describe('testing GroupItem component', () => {
  const caption = new RegExp(`${mockGroupItem.caption}`, 'i');

  it('should be displayed', () => {
    render(<GroupItem {...mockGroupItem} />);

    expect(screen.getByTestId('group-item')).toBeInTheDocument();
    expect(screen.getByText(caption)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toBe(mockGroupItem.items.length);
  });

  it('An error should be displayed if the value is not valid', () => {
    mockGroupItem.isValid = false;
    render(<GroupItem {...mockGroupItem} />);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
