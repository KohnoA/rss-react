import { Component } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  additionalClasses?: string;
}

export default class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button
        className={`${styles.button} ${
          this.props.additionalClasses ? this.props.additionalClasses : ''
        }`}
      >
        {this.props.text}
      </button>
    );
  }
}
