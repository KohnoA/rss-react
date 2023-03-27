import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';

interface CardListProps {
  cardsData: IProduct[];
}

export default function CardList({ cardsData }: CardListProps) {
  return (
    <div className={styles.cardList__list} data-testid="card-list">
      {cardsData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
