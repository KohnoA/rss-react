import React, { Component } from 'react';
import styles from '../CreateCard.module.scss';

interface InputItemProps {
  id: string;
  type: string;
  label: string;
  innerRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  accept?: string;
}

export default class InputItem extends Component<InputItemProps> {
  constructor(props: InputItemProps) {
    super(props);
  }

  render() {
    const { id, type, label, placeholder, innerRef } = this.props;

    return (
      <div className={styles.formItem}>
        <label htmlFor={id} className={styles.formItem__label}>
          {label}
        </label>
        <input
          id={id}
          className={styles.formItem__input}
          type={type}
          placeholder={placeholder}
          ref={innerRef}
        />
      </div>
    );
  }
}
