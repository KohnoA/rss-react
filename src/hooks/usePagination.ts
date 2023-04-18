import { setPageInFormCardList, setPageInMainCardList } from 'src/store/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { RootState } from 'src/store';

type usePaginationReturn = [number, (page: number) => void];

export function usePagination(
  callback: (state: RootState) => number,
  action: typeof setPageInFormCardList | typeof setPageInMainCardList
): usePaginationReturn {
  const currentPage = useAppSelector(callback);
  const dispatch = useAppDispatch();

  const setCurrentPage = (page: number) => {
    dispatch(action(page));
  };

  return [currentPage, setCurrentPage];
}
