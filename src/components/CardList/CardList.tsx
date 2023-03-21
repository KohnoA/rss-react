import { Component } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { IProduct } from 'src/types/IProduct';
import { PRODUCTS_DATA } from 'src/constants/productsData';

interface CardListState {
  cardsData: IProduct[] | null;
}

export default class CardList extends Component<unknown, CardListState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cardsData: null,
    };
  }

  componentDidMount(): void {
    this.setState({ cardsData: PRODUCTS_DATA });
  }

  render() {
    return (
      <div className={styles.cardList__list} data-testid="card-list">
        {this.state.cardsData ? (
          this.state.cardsData.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <div className={styles.cardList__loading}>Loading...</div>
        )}
      </div>
    );
  }
}
