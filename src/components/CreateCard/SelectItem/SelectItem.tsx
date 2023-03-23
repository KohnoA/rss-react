import React, { Component } from 'react';
import styles from '../CreateCard.module.scss';

interface SelectItemProps {
  id: string;
  label: string;
  options: string[];
  innerRef: React.RefObject<HTMLSelectElement>;
  isValid: boolean;
}

export default class SelectItem extends Component<SelectItemProps> {
  constructor(props: SelectItemProps) {
    super(props);
  }

  render() {
    const { id, label, options, innerRef, isValid } = this.props;

    return (
      <div className={styles.formItem}>
        <label htmlFor={id} className={styles.formItem__label}>
          {label}
        </label>

        {!isValid && <p className={styles.formItem__errorMessage}>Error</p>}

        <select
          className={`${styles.formItem__input} ${!isValid ? styles.formItem__input_error : ''}`}
          id={id}
          ref={innerRef}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a category
          </option>

          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
