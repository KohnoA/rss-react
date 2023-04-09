import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';
import CardDetails from '../CardDetails/CardDetails';
import { useState } from 'react';
import Modal from '../UI/Modal/Modal';

interface CardListProps {
  cardsData: IProduct[];
  emptyMessage?: string;
}

export default function CardList({ cardsData, emptyMessage }: CardListProps) {
  const [currentCardId, setCurrentCardId] = useState<number | null>(null);

  return cardsData.length ? (
    <>
      <div className={styles.cardList} data-testid="card-list">
        {cardsData.map((item) => (
          <Card key={item.id} data={item} showDetails={setCurrentCardId} />
        ))}
      </div>

      <Modal isActive={!!currentCardId} onClose={() => setCurrentCardId(null)}>
        <CardDetails id={currentCardId as number} />
      </Modal>
    </>
  ) : (
    <div className={styles.cardList__noData}>{emptyMessage || 'Cards not found'} 😞</div>
  );
}
