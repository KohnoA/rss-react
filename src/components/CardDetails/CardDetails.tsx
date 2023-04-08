import Button from '../UI/Button/Button';
import styles from './CardDetails.module.scss';
import { IProduct } from 'src/types/IProduct';

interface CardDetailsProps {
  data: IProduct;
}

export default function CardDetails({ data }: CardDetailsProps) {
  const { title, image, category, price, rate, date, condition, tags, description } = data;

  return (
    <div className={styles.details}>
      <h2 className={styles.details__title}>
        {title} ({condition})
      </h2>

      <span className={styles.details__image} style={{ backgroundImage: `url(${image})` }} />

      <ul className={styles.details__info}>
        <li className={styles.details__infoItem}>
          <b>Date of purchase: </b>
          {date.replace(/-/g, '.')}
        </li>

        <li className={styles.details__infoItem}>
          <b>Category: </b>
          {category}
        </li>

        <li className={styles.details__infoItem}>
          <b>Price:</b> &#8364;{price}
        </li>

        <li className={styles.details__infoItem}>
          <b>Rate: </b>
          {rate}
        </li>

        <li className={styles.details__infoItem}>
          <b>Tags: </b>
          <i>{tags.length ? tags.map((item) => `#${item}`).join(' ') : 'No Data'}</i>
        </li>

        <li className={styles.details__infoItem}>
          <b>Description:</b> {description || 'No Data'}
        </li>
        <Button text="Buy Now" additionalClasses={styles.details__button} />
      </ul>
    </div>
  );
}
