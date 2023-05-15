import CreateCard from 'src/components/CreateCard/CreateCard';
import CardList from 'src/components/CardList/CardList';
import styles from './Form.module.scss';
import { useAppSelector } from 'src/hooks/redux';
import { setPageInFormCardList } from 'src/store/slices/paginationSlice';
import { usePagination } from 'src/hooks/usePagination';

export default function Form() {
  const [currentPage, setCurrentPage] = usePagination(
    (state) => state.pagination.formCardList,
    setPageInFormCardList
  );
  const userCards = useAppSelector((state) => state.user.cards);
  const cardsInCurrentPage = userCards[currentPage - 1];
  const totalItems = userCards.reduce((acc, next) => acc + next.length, 0);

  return (
    <div className="container page" data-testid="page-form">
      <h2 className="title">Form</h2>
      <CreateCard />

      <h3 className={styles.form__subtitle}>Your Cards</h3>
      <CardList
        cardsData={cardsInCurrentPage}
        emptyMessage="No cards yet"
        pagination={{
          currentPage,
          totalItems,
          setCurrentPage,
        }}
      />
    </div>
  );
}
