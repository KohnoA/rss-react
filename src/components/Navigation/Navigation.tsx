import { Component } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from 'src/constants/appRoutes';

export default class Navigation extends Component {
  render() {
    return (
      <nav data-testid="navigation">
        <ul className={styles.navigation__list}>
          {APP_ROUTES.filter((route) => route.id).map((route) => (
            <li key={route.id}>
              <Link to={route.link} className={styles.navigation__link} data-testid={route.test}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
