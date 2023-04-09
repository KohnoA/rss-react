import { useEffect, useState } from 'react';
import styles from './SearchPanel.module.scss';
import { LOCALSTORAGE_SEARCH } from 'src/constants/constants';
import { useSearchParams } from 'react-router-dom';
import { URL_KEY_SEARCH } from 'src/constants/constants';

export default function SearchPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>(localStorage.getItem(LOCALSTORAGE_SEARCH) ?? '');

  useEffect(() => {
    if (value) {
      searchParams.set(URL_KEY_SEARCH, value);
      setSearchParams(searchParams);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (event: React.FormEvent) => {
    if (value) {
      searchParams.set(URL_KEY_SEARCH, value);
      localStorage.setItem(LOCALSTORAGE_SEARCH, value);
    } else {
      searchParams.delete(URL_KEY_SEARCH);
      localStorage.removeItem(LOCALSTORAGE_SEARCH);
    }

    setSearchParams(searchParams);
    event.preventDefault();
  };

  const clearSearchPanel = () => {
    searchParams.delete(URL_KEY_SEARCH);
    localStorage.removeItem(LOCALSTORAGE_SEARCH);
    setSearchParams(searchParams);
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
