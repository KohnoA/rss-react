import React, { useState } from 'react';
import styles from './SearchPanel.module.scss';
import { saveSearchValue, deleteSearchValue } from 'src/store/slices/searchSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setPageInMainCardList } from 'src/store/slices/paginationSlice';
import { START_PAGE } from 'src/constants/constants';

function SearchPanel() {
  const stateValue = useAppSelector((state) => state.search.value);
  const [value, setValue] = useState<string>(stateValue);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    dispatch(setPageInMainCardList(START_PAGE));

    if (value) dispatch(saveSearchValue(value));
    else dispatch(deleteSearchValue());

    event.preventDefault();
  };

  const clearSearchPanel = () => {
    dispatch(deleteSearchValue());
    dispatch(setPageInMainCardList(START_PAGE));
    setValue('');
  };

  return (
    <form
      className={styles.search}
      action="#"
      method="GET"
      onSubmit={handleSubmit}
      data-testid="search-panel"
    >
      <input
        className={styles.search__input}
        type="text"
        placeholder="I want to find..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <span
        className={styles.search__clean}
        onClick={clearSearchPanel}
        data-testid="clean-button"
      />
      <button className={styles.search__find} type="submit">
        Search
      </button>
    </form>
  );
}

export default React.memo(SearchPanel);
