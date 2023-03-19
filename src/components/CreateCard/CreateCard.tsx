import { Component } from 'react';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';

export default class CreateCard extends Component {
  submitHandler(event: React.FormEvent): void {
    event.preventDefault();
  }

  render() {
    return (
      <form className={styles.createCard} action="#" onSubmit={this.submitHandler}>
        <label className={styles.createCard__item}>
          Title:
          <input type="text" placeholder="IPhone X" />
        </label>

        <label className={styles.createCard__item}>
          Price:
          <input type="number" />
        </label>

        <label className={styles.createCard__item}>
          Count:
          <input type="number" />
        </label>

        <label className={styles.createCard__item}>
          Rate:
          <input type="number" />
        </label>

        <label className={styles.createCard__item}>
          Date of purchase:
          <input type="date" />
        </label>

        <label htmlFor="category" className={styles.createCard__item}>
          Category:
          <select id="category">
            <option>men&apos;s clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
          </select>
        </label>

        <label className={styles.createCard__item}>
          Photo:
          <input type="file" />
        </label>

        <div>
          <p>Product condition:</p>
          <label>
            <input name="form-task" type="radio" value="new" /> New
          </label>

          <label>
            <input name="form-task" type="radio" value="used" /> Used
          </label>
        </div>

        <div className={styles.createCard__agreement}>
          <label>
            <input type="checkbox" /> I agree with the privacy policy.
          </label>
          <label>
            <input type="checkbox" /> Yes, I want to be notified of updates.
          </label>
        </div>

        <Button additionalClasses={styles.createCard__create} text="Create" />
      </form>
    );
  }
}
