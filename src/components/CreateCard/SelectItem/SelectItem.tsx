import React, { Component } from 'react';
import styles from '../CreateCard.module.scss';

interface SelectItemProps {
  id: string;
  label: string;
  options: string[];
  innerRef: React.RefObject<HTMLSelectElement>;
}

export default class SelectItem extends Component<SelectItemProps> {
  constructor(props: SelectItemProps) {
    super(props);
  }

  render() {
    const { id, label, options, innerRef } = this.props;

    return (
      <div className={styles.formItem}>
        <label htmlFor={id} className={styles.formItem__label}>
          {label}
        </label>
        <select className={styles.formItem__input} id={id} ref={innerRef}>
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
