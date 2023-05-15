import Button from '../UI/Button/Button';
import styles from './CardDetails.module.scss';
import { useGetProductQuery } from 'src/services/ProductService';
import { IProduct } from '../../types/IProduct';
import Modal from '../UI/Modal/Modal';

const emptyProduct: Record<keyof Omit<IProduct, 'id' | 'isUserCard'>, string> = {
  title: 'No Data',
  price: 'No Data',
  image: '',
  rate: 'No Data',
  date: 'MM-DD-YYYY',
  category: 'No Data',
  condition: 'No Data',
  tags: 'No Data',
  description: 'No Data',
};

interface CardDetailsProps {
  id: number;
  hideDetails: () => void;
}

export default function CardDetails({ id, hideDetails }: CardDetailsProps) {
  const { data: product, isFetching, isError } = useGetProductQuery(id);
  const { title, condition, price, category, rate, description, image, date, tags } =
    product ?? emptyProduct;

  return (
    <Modal isActive={!!id} isLoading={isFetching} onClose={hideDetails}>
      {isError ? (
        <div className={styles.details__error}>Something went wrong, please try again later.</div>
      ) : (
        <div className={styles.details} data-testid="details">
          <h2 className={styles.details__title}>
            {title} ({condition})
          </h2>

          <span
            data-testid="details-image"
            className={styles.details__image}
            {...(image ? { style: { backgroundImage: `url(${image})` } } : {})}
          />

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
              <i>{Array.isArray(tags) ? tags.map((item) => `#${item}`).join(' ') : tags}</i>
            </li>

            <li className={styles.details__infoItem}>
              <b>Description:</b> {description}
            </li>

            <Button text="Buy Now" additionalClasses={styles.details__button} />
          </ul>
        </div>
      )}
    </Modal>
  );
}
