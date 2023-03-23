import React, { Component } from 'react';
import styles from './GroupItem.module.scss';

interface GroupItemProps {
  caption: string;
  type: string;
  name?: string;
  isValid: boolean;
  items: Array<{
    label: string;
    innerRef: React.RefObject<HTMLInputElement>;
  }>;
}

export default class GroupItem extends Component<GroupItemProps> {
  constructor(props: GroupItemProps) {
    super(props);
  }

  render() {
    const { caption, type, items, name, isValid } = this.props;

    return (
      <div className={styles.group}>
        <p className={`${styles.group__caption} ${!isValid ? styles.group__error : ''}`}>
          {caption}
        </p>
        {!isValid && <p className={styles.group__errorMessage}>Error</p>}
        {items.map((item) => (
          <label key={item.label} className={styles.group__item}>
            <input name={name} type={type} ref={item.innerRef} value={item.label} /> {item.label}
          </label>
        ))}
      </div>
    );
  }
}
