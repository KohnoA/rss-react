import React, { Component } from 'react';
import styles from './InputItem.module.scss';

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
      <div className={styles.inputItem}>
        <label htmlFor={id} className={styles.inputItem__caption}>
          {label}
        </label>
        <input
          id={id}
          className={styles.inputItem__input}
          type={type}
          placeholder={placeholder}
          ref={innerRef}
        />
      </div>
    );
  }
}
