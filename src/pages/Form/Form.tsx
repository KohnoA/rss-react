import { useState } from 'react';
import CreateCard from 'src/components/CreateCard/CreateCard';
import CardList from 'src/components/CardList/CardList';
import { IProduct } from 'src/types/IProduct';
import styles from './Form.module.scss';

export default function Form() {
  const [userCards, setUserCards] = useState<IProduct[]>([]);

  const handlerAddCard = (newCard: IProduct): void => {
    setUserCards([...userCards, newCard]);
  };

  return (
    <div className="container page" data-testid="page-form">
      <h2 className="title">Form</h2>

      <CreateCard handlerAddCard={handlerAddCard} />

      <h3 className={styles.form__subtitle}>Your Cards</h3>

      {userCards.length ? (
        <CardList cardsData={userCards} />
      ) : (
        <div className={styles.form__noData}>No cards yet 😞</div>
      )}
    </div>
  );
}
