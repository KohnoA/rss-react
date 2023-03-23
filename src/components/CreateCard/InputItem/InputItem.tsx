import React, { Component } from 'react';
import styles from '../CreateCard.module.scss';

interface InputItemProps {
  id: string;
  type: string;
  label: string;
  innerRef: React.RefObject<HTMLInputElement>;
  isValid: boolean;
  placeholder?: string;
  accept?: string;
}

export default class InputItem extends Component<InputItemProps> {
  constructor(props: InputItemProps) {
    super(props);
  }

  render() {
    const { id, type, label, placeholder, innerRef, accept, isValid } = this.props;

    return (
      <div className={styles.formItem}>
        <label htmlFor={id} className={styles.formItem__label}>
          {label}
        </label>
        {!isValid && <p className={styles.formItem__errorMessage}>Error</p>}
        <input
          id={id}
          className={`${styles.formItem__input} ${!isValid ? styles.formItem__input_error : ''}`}
          type={type}
          placeholder={placeholder}
          ref={innerRef}
          accept={accept}
          {...(type === 'number' ? { step: 'any' } : {})}
        />
      </div>
    );
  }
}
