import { useEffect, useState } from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import { IProduct } from 'src/types/IProduct';
import { PRODUCTS_DATA } from 'src/constants/productsData';

export default function Main() {
  const [cardsData, setCardsData] = useState<IProduct[]>([]);

  useEffect(() => setCardsData(PRODUCTS_DATA), []);

  return (
    <div className="container page" data-testid="page-main">
      <h2 className="title">Main</h2>

      <SearchPanel />

      <CardList cardsData={cardsData} />
    </div>
  );
}
