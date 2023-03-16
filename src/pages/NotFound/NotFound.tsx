import { Component } from 'react';
import styles from './NotFound.module.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className={`container page ${styles.notFound}`} data-testid="page-not-found">
        <h2 className={styles.notFound__title}>404</h2>
        <p className={styles.notFound__info}>Page not found</p>
      </div>
    );
  }
}
