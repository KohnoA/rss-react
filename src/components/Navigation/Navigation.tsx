import { Component } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/constants/AppRoutes';

export default class Navigation extends Component {
  render() {
    return (
      <nav data-testid="navigation">
        <ul className={styles.navigation__list}>
          <li>
            <Link
              to={AppRoutes.main}
              className={styles.navigation__link}
              data-testid="nav-main-link"
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              to={AppRoutes.about}
              className={styles.navigation__link}
              data-testid="nav-about-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={AppRoutes.form}
              className={styles.navigation__link}
              data-testid="nav-form-link"
            >
              Form
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
