import React, { Component } from 'react';
import styles from './GroupItem.module.scss';

interface GroupItemProps {
  caption: string;
  type: string;
  name?: string;
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
    const { caption, type, items, name } = this.props;

    return (
      <div className={styles.group}>
        <p className={styles.group__caption}>{caption}</p>
        {items.map((item) => (
          <label key={item.label} className={styles.group__item}>
            <input name={name} type={type} ref={item.innerRef} /> {item.label}
          </label>
        ))}
      </div>
    );
  }
}
