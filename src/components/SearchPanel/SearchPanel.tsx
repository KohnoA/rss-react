import React, { useState } from 'react';
import styles from './SearchPanel.module.scss';
import { useAppDispatch } from 'src/hooks/redux';
import { useAppSelector } from 'src/hooks/redux';
import { saveSearchValue, deleteSearchValue } from 'src/store/reducers/searchSlice';

interface SearchPanelProps {
  changeFilter: (value: string) => void;
}

function SearchPanel({ changeFilter }: SearchPanelProps) {
  const stateValue = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(stateValue);

  const handleSubmit = (event: React.FormEvent) => {
    if (value) dispatch(saveSearchValue(value));
    else dispatch(deleteSearchValue());

    changeFilter(value);
    event.preventDefault();
  };

  const clearSearchPanel = () => {
    dispatch(deleteSearchValue());
    setValue('');
    changeFilter('');
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
