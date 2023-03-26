import { Component } from 'react';
import styles from './Header.module.scss';
import Navigation from 'src/components/Navigation/Navigation';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={`container ${styles.header__wrapper}`}>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
