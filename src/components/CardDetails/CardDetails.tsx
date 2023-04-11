import Button from '../UI/Button/Button';
import styles from './CardDetails.module.scss';
import { IProduct } from 'src/types/IProduct';
import { useEffect, useState } from 'react';
import ProductService from 'src/API/ProductService';
import Loader from '../UI/Loader/Loader';

interface CardDetailsProps {
  id: number;
}

export default function CardDetails({ id }: CardDetailsProps) {
  const [cardData, setCardData] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    ProductService.getItem(id)
      .then((res) => setCardData(res))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (error) {
    return <div className={styles.details__error}>{error}</div>;
  }

  if (isLoading) {
    return (
      <div className={styles.details__loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.details} data-testid="details">
      <h2 className={styles.details__title}>
        {cardData?.title ?? 'No Data'} ({cardData?.condition ?? 'No Data'})
      </h2>

      <span
        data-testid="details-image"
        className={styles.details__image}
        style={{ backgroundImage: `url(${cardData?.image})` }}
      />

      <ul className={styles.details__info}>
        <li className={styles.details__infoItem}>
          <b>Date of purchase: </b>
          {cardData?.date.replace(/-/g, '.') ?? 'No Data'}
        </li>

        <li className={styles.details__infoItem}>
          <b>Category: </b>
          {cardData?.category ?? 'No Data'}
        </li>

        <li className={styles.details__infoItem}>
          <b>Price:</b> &#8364;{cardData?.price ?? 'No Data'}
        </li>

        <li className={styles.details__infoItem}>
          <b>Rate: </b>
          {cardData?.rate ?? 'No Data'}
        </li>

        <li className={styles.details__infoItem}>
          <b>Tags: </b>
          <i>{cardData?.tags.map((item) => `#${item}`).join(' ') || 'No Data'}</i>
        </li>

        <li className={styles.details__infoItem}>
          <b>Description:</b> {cardData?.description ?? 'No Data'}
        </li>

        <Button text="Buy Now" additionalClasses={styles.details__button} />
      </ul>
    </div>
  );
}
