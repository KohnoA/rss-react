import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('testing Modal component', () => {
  let isActive = true;
  const onClose = () => (isActive = false);

  afterEach(() => (isActive = true));

  it('should be displayed', () => {
    render(
      <Modal isActive={isActive} onClose={onClose}>
        Test Modal
      </Modal>
    );

    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
  });

  it('should close when you click on the cross', () => {
    const { rerender } = render(
      <Modal isActive={isActive} onClose={onClose}>
        Test Modal
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-close'));
    rerender(
      <Modal isActive={isActive} onClose={onClose}>
        Test Modal
      </Modal>
    );

    expect(screen.queryByTestId('modal-content')).toBeNull();
  });

  it('should close when you click on the overlay', () => {
    const { rerender } = render(
      <Modal isActive={isActive} onClose={onClose}>
        Test Modal
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-overlay'));
    rerender(
      <Modal isActive={isActive} onClose={onClose}>
        Test Modal
      </Modal>
    );

    screen.debug();
    expect(screen.queryByTestId('modal-content')).toBeNull();
  });
});
