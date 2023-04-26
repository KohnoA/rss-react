import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';
import CardDetails from '../CardDetails/CardDetails';
import Loader from '../UI/Loader/Loader';
import Pagination from '../UI/Pagination/Pagination';
import { useAppSelector } from 'src/hooks/redux';

interface CardListProps {
  cardsData: IProduct[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  emptyMessage?: string;
  pagination?: {
    totalItems: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
  };
}

export default function CardList(props: CardListProps) {
  const currentCardId = useAppSelector((state) => state.cardDetails.cardId);
  const { cardsData, isLoading, isError, errorMessage, emptyMessage, pagination } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p className={styles.cardList__error}>
        {errorMessage || 'Something went wrong, please try again later.'}
      </p>
    );
  }

  if (!cardsData.length) {
    return <div className={styles.cardList__noData}>{emptyMessage || 'Cards not found'} 😞</div>;
  }

  return (
    <>
      <div className={styles.cardList} data-testid="card-list">
        {cardsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      {pagination && <Pagination {...pagination} />}

      {currentCardId && <CardDetails id={currentCardId} />}
    </>
  );
}
