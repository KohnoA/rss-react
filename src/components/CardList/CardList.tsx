import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';

interface CardListProps {
  cardsData: IProduct[];
  emptyMessage?: string;
}

export default function CardList({ cardsData, emptyMessage }: CardListProps) {
  return cardsData.length ? (
    <div className={styles.cardList} data-testid="card-list">
      {cardsData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  ) : (
    <div className={styles.cardList__noData}>{emptyMessage || 'Cards not found'} 😞</div>
  );
}
