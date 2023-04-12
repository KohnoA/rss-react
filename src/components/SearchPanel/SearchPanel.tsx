import React, { useState } from 'react';
import styles from './SearchPanel.module.scss';
import { LOCALSTORAGE_SEARCH } from 'src/constants/constants';

interface SearchPanelProps {
  changeFilter: (value: string) => void;
}

function SearchPanel({ changeFilter }: SearchPanelProps) {
  const [value, setValue] = useState<string>(localStorage.getItem(LOCALSTORAGE_SEARCH) ?? '');

  const handleSubmit = (event: React.FormEvent) => {
    if (value) localStorage.setItem(LOCALSTORAGE_SEARCH, value);
    else localStorage.removeItem(LOCALSTORAGE_SEARCH);

    changeFilter(value);
    event.preventDefault();
  };

  const clearSearchPanel = () => {
    localStorage.removeItem(LOCALSTORAGE_SEARCH);
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
