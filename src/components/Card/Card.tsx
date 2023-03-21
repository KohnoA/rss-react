import { Component } from 'react';
import { IProduct } from 'src/types/IProduct';
import Button from '../UI/Button/Button';
import styles from './Card.module.scss';

interface CardProps {
  data: IProduct;
}

export default class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { image, title, category, price, rating } = this.props.data;

    return (
      <div className={styles.card} data-testid="card">
        <span
          className={styles.card__image}
          style={{ backgroundImage: `url(${image})` }}
          data-testid="card-image"
        />

        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__category}>{category}</p>
        <p className={styles.card__price}>&#8364;{price}</p>

        <div className={styles.card__rating}>
          <span data-testid="card-rate">Rate: {rating.rate}</span>
          <span data-testid="card-count">Count: {rating.count}</span>
        </div>

        <Button text="Buy Now" additionalClasses={styles.card__button} />
      </div>
    );
  }
}
