import { setPageInFormCardList, setPageInMainCardList } from 'src/store/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { RootState } from 'src/store';
import { useEffect, useState } from 'react';
import { START_PAGE } from 'src/constants/constants';

type usePaginationReturn = [number, (page: number) => void];

export function usePagination(
  callback: (state: RootState) => number,
  action: typeof setPageInFormCardList | typeof setPageInMainCardList
): usePaginationReturn {
  const [currentPage, setCurrentPage] = useState<number>(START_PAGE);
  const stateCurrentPage = useAppSelector(callback);
  const dispatch = useAppDispatch();

  const setStateCurrentPage = (page: number) => {
    dispatch(action(page));
  };

  useEffect(() => setCurrentPage(stateCurrentPage), [stateCurrentPage]);

  return [currentPage, setStateCurrentPage];
}
