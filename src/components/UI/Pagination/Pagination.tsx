import { LIMIT_ITEMS_IN_CARD_LIST } from 'src/constants/constants';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function Pagination({ currentPage, totalItems, setCurrentPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / LIMIT_ITEMS_IN_CARD_LIST);

  const currentPageHandler = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {totalItems > LIMIT_ITEMS_IN_CARD_LIST && (
        <div className={styles.pagination}>
          {new Array(totalPages).fill(totalPages).map((_, index) => {
            const numberOfPage = index + 1;

            return (
              <Button
                key={numberOfPage}
                onClick={() => currentPageHandler(numberOfPage)}
                text={`${numberOfPage}`}
                {...(numberOfPage === currentPage
                  ? { additionalClasses: styles.pagination__current }
                  : {})}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
