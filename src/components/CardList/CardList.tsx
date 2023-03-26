import { Component } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';

interface CardListProps {
  cardsData: IProduct[];
}

export default class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cardList__list} data-testid="card-list">
        {this.props.cardsData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    );
  }
}
