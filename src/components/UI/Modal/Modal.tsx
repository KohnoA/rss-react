import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isActive, onClose, children }: ModalProps) {
  return createPortal(
    <div className={`${styles.modal} ${isActive ? styles.modal_active : ''}`} onClick={onClose}>
      <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
        <span className={styles.modal__close} onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}
