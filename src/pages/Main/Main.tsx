import React from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import Loader from 'src/components/UI/Loader/Loader';
import { useAppSelector } from 'src/hooks/redux';
import { useGetAllProductsQuery } from 'src/services/ProductService';
import styles from './Main.module.scss';

export default function Main() {
  const searchQuery = useAppSelector((state) => state.search.value);
  const { data: products, isFetching, isError } = useGetAllProductsQuery(searchQuery);

  const handleCardList = (): React.ReactNode => {
    if (isFetching) {
      return <Loader />;
    } else if (isError) {
      return <p className={styles.main__error}>Something went wrong, please try again later.</p>;
    } else {
      return <CardList cardsData={products ?? []} />;
    }
  };

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel />

      {handleCardList()}
    </div>
  );
}
