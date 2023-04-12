import Button from '../Button/Button';
import styles from './Pagination.module.scss';
import { LOCALSTORAGE_CURRENT_PAGE } from 'src/constants/constants';

interface PaginationProps {
  current: number;
  total: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function Pagination({ current, total, setCurrentPage }: PaginationProps) {
  const currentPageHandler = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem(LOCALSTORAGE_CURRENT_PAGE, String(page));
  };

  return (
    <div className={styles.pagination}>
      {new Array(total).fill(total).map((_, index) => {
        const numberOfPage = index + 1;

        return (
          <Button
            key={numberOfPage}
            onClick={() => currentPageHandler(numberOfPage)}
            text={`${numberOfPage}`}
            {...(numberOfPage === current ? { additionalClasses: styles.pagination__current } : {})}
          />
        );
      })}
    </div>
  );
}
