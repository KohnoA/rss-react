import { Component } from 'react';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';
import { CATEGORIES_OF_PRODUCTS } from 'src/constants/constants';

export default class CreateCard extends Component {
  submitHandler(event: React.FormEvent): void {
    event.preventDefault();
  }

  render() {
    return (
      <form className={styles.createCard} action="#" onSubmit={this.submitHandler}>
        <div className={styles.createCard__item}>
          <label htmlFor="title" className={styles.createCard__label}>
            Product name:
          </label>
          <input
            id="title"
            className={styles.createCard__input}
            type="text"
            placeholder="IPhone X"
          />
        </div>

        <div className={styles.createCard__item}>
          <label htmlFor="price" className={styles.createCard__label}>
            Price (&#8364;):
          </label>
          <input
            id="price"
            className={styles.createCard__input}
            type="number"
            placeholder="49.99"
          />
        </div>

        <div className={styles.createCard__item}>
          <label htmlFor="rate" className={styles.createCard__label}>
            Rate:
          </label>
          <input id="rate" className={styles.createCard__input} type="number" placeholder="4.5" />
        </div>

        <div className={styles.createCard__item}>
          <label htmlFor="date" className={styles.createCard__label}>
            Date of purchase:
          </label>
          <input id="date" className={styles.createCard__input} type="date" />
        </div>

        <div className={styles.createCard__item}>
          <label htmlFor="category" className={styles.createCard__label}>
            Category:
          </label>
          <select className={styles.createCard__input} id="category">
            {CATEGORIES_OF_PRODUCTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.createCard__item}>
          <label htmlFor="image" className={styles.createCard__label}>
            Photo:
          </label>
          <input id="image" className={styles.createCard__input} type="file" accept="image/*" />
        </div>

        <div className={styles.createCard__another}>
          <p className={styles.createCard__another_caption}>Tags:</p>
          <label className={styles.createCard__another_item}>
            <input type="checkbox" /> I want to sell urgently.
          </label>
          <label className={styles.createCard__another_item}>
            <input type="checkbox" /> Bargaining possible
          </label>
        </div>

        <div className={styles.createCard__another}>
          <p className={styles.createCard__another_caption}>Product condition:</p>
          <label className={styles.createCard__another_item}>
            <input name="condition" type="radio" value="new" /> New
          </label>
          <label className={styles.createCard__another_item}>
            <input name="condition" type="radio" value="used" /> Used
          </label>
        </div>

        <Button additionalClasses={styles.createCard__create} text="Create New Card" />
      </form>
    );
  }
}
