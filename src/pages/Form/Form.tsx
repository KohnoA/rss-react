import { Component } from 'react';
import styles from './Form.module.scss';
import CreateCard from 'src/components/CreateCard/CreateCard';

export default class Form extends Component {
  render() {
    return (
      <div className="container page" data-testid="page-form">
        <h2 className={styles.form__title}>Form</h2>

        <CreateCard />
      </div>
    );
  }
}
