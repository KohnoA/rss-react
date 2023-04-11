import { useEffect, useState } from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import Pagination from 'src/components/UI/Pagination/Pagination';
import CardList from 'src/components/CardList/CardList';
import Loader from 'src/components/UI/Loader/Loader';
import ProductService from 'src/API/ProductService';
import { IProduct } from 'src/types/IProduct';
import {
  LOCALSTORAGE_SEARCH,
  LOCALSTORAGE_CURRENT_PAGE,
  DEFAULT_PAGE_LIMIT,
} from 'src/constants/constants';

export default function Main() {
  const initialPage = 1;
  const [cardsData, setCardsData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState(localStorage.getItem(LOCALSTORAGE_SEARCH) ?? '');
  const [isShowPagination, setIsShowPagination] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const saveCurrentPage = localStorage.getItem(LOCALSTORAGE_CURRENT_PAGE);

    return saveCurrentPage ? Number(saveCurrentPage) : initialPage;
  });

  useEffect(() => {
    setIsLoading(true);

    ProductService.getAll(filter, currentPage)
      .then((res) => {
        const [cards, total] = res;

        setCardsData(cards);
        setTotalPages(Math.ceil(total / DEFAULT_PAGE_LIMIT));
        setIsShowPagination(total > DEFAULT_PAGE_LIMIT);
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }, [filter, currentPage]);

  const filterChangeHandler = (value: string) => {
    setFilter(value);
    setCurrentPage(initialPage);
    localStorage.removeItem(LOCALSTORAGE_CURRENT_PAGE);
  };

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel changeFilter={filterChangeHandler} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardList cardsData={cardsData} />

          {isShowPagination && totalPages && (
            <Pagination current={currentPage} total={totalPages} setCurrentPage={setCurrentPage} />
          )}
        </>
      )}
    </div>
  );
}
