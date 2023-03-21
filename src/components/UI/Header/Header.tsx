import { Component } from 'react';
import styles from './Header.module.scss';
import Navigation from 'src/components/Navigation/Navigation';
import { UNSAFE_LocationContext } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={`container ${styles.header__wrapper}`}>
          <Navigation />

          <UNSAFE_LocationContext.Consumer>
            {(value) => {
              let pageTitle: string;

              switch (value.location.pathname) {
                case '/':
                  pageTitle = 'Main';
                  break;
                case '/about':
                  pageTitle = 'About';
                  break;
                default:
                  pageTitle = '404';
                  break;
              }

              return <p className={styles.header__currentPage}>Current page: {pageTitle}</p>;
            }}
          </UNSAFE_LocationContext.Consumer>
        </div>
      </header>
    );
  }
}

export default Header;
