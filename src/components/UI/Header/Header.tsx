import { Component } from 'react';
import styles from './Header.module.scss';
import Navigation from 'src/components/Navigation/Navigation';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation />
        </div>
      </header>
    );
  }
}
