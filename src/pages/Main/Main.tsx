import { useEffect, useState } from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import Loader from 'src/components/UI/Loader/Loader';
import { IProduct } from 'src/types/IProduct';
import ProductService from 'src/API/ProductService';
import { useSearchParams } from 'react-router-dom';
import { LOCALSTORAGE_SEARCH, URL_KEY_SEARCH } from 'src/constants/constants';

export default function Main() {
  const [cardsData, setCardsData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const filter =
    searchParams.get(URL_KEY_SEARCH) || localStorage.getItem(LOCALSTORAGE_SEARCH) || '';

  useEffect(() => {
    setIsLoading(true);
    ProductService.getAll(filter)
      .then((res) => setCardsData(res))
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }, [filter]);

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel />

      {isLoading ? <Loader /> : <CardList cardsData={cardsData} />}
    </div>
  );
}
