import styles from './Modal.module.scss';

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isActive, onClose, children }: ModalProps) {
  return (
    <>
      {isActive && (
        <div className={styles.modal} onClick={onClose} data-testid="modal-overlay">
          <div
            className={styles.modal__content}
            onClick={(event) => event.stopPropagation()}
            data-testid="modal-content"
          >
            <span className={styles.modal__close} onClick={onClose} data-testid="modal-close" />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
