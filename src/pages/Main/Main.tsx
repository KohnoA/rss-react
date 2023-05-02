import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import { useGetAllProductsQuery } from 'src/services/ProductService';
import { useAppSelector } from 'src/hooks/redux';
import { TOTAL_COUNT_DEFAULT_VALUE } from 'src/constants/constants';
import { setPageInMainCardList } from 'src/store/slices/paginationSlice';
import { usePagination } from 'src/hooks/usePagination';
import { useEffect, useState } from 'react';

export default function Main() {
  const stateSearchQuery = useAppSelector((state) => state.search.value);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = usePagination(
    (state) => state.pagination.mainCardList,
    setPageInMainCardList
  );
  const { data, isFetching, isError } = useGetAllProductsQuery({
    filter: searchQuery,
    page: currentPage,
  });
  const { response, totalCount: totalItems } = data ?? {
    response: [],
    totalCount: TOTAL_COUNT_DEFAULT_VALUE,
  };

  useEffect(() => setSearchQuery(stateSearchQuery), [stateSearchQuery]);

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel />

      <CardList
        cardsData={response}
        isLoading={isFetching}
        isError={isError}
        pagination={{
          totalItems,
          currentPage,
          setCurrentPage,
        }}
      />
    </div>
  );
}
