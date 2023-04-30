import { IProduct } from 'src/types/IProduct';
import Button from '../UI/Button/Button';
import styles from './Card.module.scss';
import React from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import { showDetails } from 'src/store/slices/cardDetailsSlice';

interface CardProps {
  data: IProduct;
}

function Card({ data }: CardProps) {
  const { id, image, title, category, price, rate, date, condition, tags, isUserCard } = data;
  const dispatch = useAppDispatch();

  const showDetailsHandler = () => {
    if (!isUserCard) {
      dispatch(showDetails(id));
    }
  };

  return (
    <div className={styles.card} data-testid="card" onClick={showDetailsHandler}>
      {tags.map((item) => (
        <div
          key={item}
          className={`${styles.card__tags} ${styles[`card__tags_${item}`]}`}
          data-testid={`card-${item}`}
        >
          {`${item.slice(0, 1).toUpperCase()}${item.slice(1)}`}
        </div>
      ))}

      <span
        className={styles.card__image}
        style={{ backgroundImage: `url(${image})` }}
        data-testid="card-image"
      />

      <div className={styles.card__infoWrapper}>
        <p className={styles.card__title} data-testid="card-title">
          {title} ({condition})
        </p>

        <p className={styles.card__category}>{category}</p>
        <p className={styles.card__price}>&#8364;{price}</p>

        <div className={styles.card__rating}>
          <span data-testid="card-rate">Rate: {rate}</span>
          <span data-testid="card-date">Date: {date.replace(/-/g, '.')}</span>
        </div>

        <Button
          text="Buy Now"
          additionalClasses={styles.card__button}
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    </div>
  );
}

export default React.memo(Card);
