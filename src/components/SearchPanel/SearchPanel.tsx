import { useEffect, useState } from 'react';
import styles from './SearchPanel.module.scss';
import { LOCALSTORAGE_KEY_SEARCH } from 'src/constants/constants';

export default function SearchPanel() {
  const [value, setValue] = useState<string>(() => {
    const savedValue = localStorage.getItem(LOCALSTORAGE_KEY_SEARCH);
    return savedValue ? savedValue : '';
  });

  useEffect(() => {
    return () => localStorage.setItem(LOCALSTORAGE_KEY_SEARCH, value);
  });

  return (
    <form
      className={styles.search}
      action="#"
      method="GET"
      onSubmit={(event) => event.preventDefault()}
      data-testid="search-panel"
    >
      <input
        className={styles.search__input}
        type="text"
        placeholder="I want to find..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      {value && (
        <>
          <span
            className={styles.search__clean}
            onClick={() => setValue('')}
            data-testid="clean-button"
          />
          <button className={styles.search__find} type="submit">
            Search
          </button>
        </>
      )}
    </form>
  );
}
