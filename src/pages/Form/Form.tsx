import CreateCard from 'src/components/CreateCard/CreateCard';
import CardList from 'src/components/CardList/CardList';
import styles from './Form.module.scss';
import { useAppSelector } from 'src/hooks/redux';

export default function Form() {
  const userCards = useAppSelector((state) => state.user.cards);

  return (
    <div className="container page" data-testid="page-form">
      <h2 className="title">Form</h2>
      <CreateCard />

      <h3 className={styles.form__subtitle}>Your Cards</h3>
      <CardList cardsData={userCards} emptyMessage="No cards yet" />
    </div>
  );
}
