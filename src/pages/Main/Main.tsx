import { useEffect, useState } from 'react';
import { useFetching } from 'src/hooks/useFetching';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import Loader from 'src/components/UI/Loader/Loader';
import { IProduct } from 'src/types/IProduct';
import ProductService from 'src/API/ProductService';
import { useSearchParams } from 'react-router-dom';
import { LOCALSTORAGE_SEARCH, URL_KEY_SEARCH } from 'src/constants/constants';

export default function Main() {
  const [cardsData, setCardsData] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams();
  const filter =
    searchParams.get(URL_KEY_SEARCH) || localStorage.getItem(LOCALSTORAGE_SEARCH) || '';
  const [getCardsData, isLoading] = useFetching(async () => {
    setCardsData(await ProductService.getAll(filter));
  });

  useEffect(() => {
    getCardsData();
  }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel />

      {isLoading ? <Loader /> : <CardList cardsData={cardsData} emptyMessage="Cards not found" />}
    </div>
  );
}
