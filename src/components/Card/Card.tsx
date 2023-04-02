import { IProduct } from 'src/types/IProduct';
import Button from '../UI/Button/Button';
import styles from './Card.module.scss';

interface CardProps {
  data: IProduct;
}

export default function Card({ data }: CardProps) {
  const { image, title, category, price, rate, date, condition, tags } = data;

  return (
    <div className={styles.card} data-testid="card">
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

      <p className={styles.card__title}>
        {title} ({condition})
      </p>

      <p className={styles.card__category}>{category}</p>
      <p className={styles.card__price}>&#8364;{price}</p>

      <div className={styles.card__rating}>
        <span data-testid="card-rate">Rate: {rate}</span>
        <span data-testid="card-date">Date: {date}</span>
      </div>

      <Button text="Buy Now" additionalClasses={styles.card__button} />
    </div>
  );
}
