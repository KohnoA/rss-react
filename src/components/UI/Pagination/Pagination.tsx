import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';
import { LOCALSTORAGE_CURRENT_PAGE } from 'src/constants/constants';

interface PaginationProps {
  current: number;
  total: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function Pagination({ current, total, setCurrentPage }: PaginationProps) {
  useEffect(() => {
    return () => {
      localStorage.setItem(LOCALSTORAGE_CURRENT_PAGE, String(current));
    };
  }, [current]);

  return (
    <div className={styles.pagination}>
      {new Array(total).fill(total).map((_, index) => {
        const numberOfPage = index + 1;

        return (
          <Button
            key={numberOfPage}
            onClick={() => setCurrentPage(numberOfPage)}
            text={`${numberOfPage}`}
            {...(numberOfPage === current ? { additionalClasses: styles.pagination__current } : {})}
          />
        );
      })}
    </div>
  );
}
