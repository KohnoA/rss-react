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
    return (
      <div className={styles.card} data-testid="card">
        <span
          className={styles.card__image}
          style={{ backgroundImage: `url(${this.props.data.image})` }}
          data-testid="card-image"
        />

        <p className={styles.card__title}>{this.props.data.title}</p>
        <p className={styles.card__category}>{this.props.data.category}</p>
        <p className={styles.card__price}>&#8364;{this.props.data.price}</p>

        <div className={styles.card__rating}>
          <span data-testid="card-rate">Rate: {this.props.data.rating.rate}</span>
          <span data-testid="card-count">Count: {this.props.data.rating.count}</span>
        </div>

        <Button text="Buy Now" additionalClasses={styles.card__button} />
      </div>
    );
  }
}
