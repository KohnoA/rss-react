import { Component } from 'react';
import CreateCard from 'src/components/CreateCard/CreateCard';
import CardList from 'src/components/CardList/CardList';
import { IProduct } from 'src/types/IProduct';
import styles from './Form.module.scss';

interface FormState {
  userCards: IProduct[];
}

export default class Form extends Component<unknown, FormState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      userCards: [],
    };

    this.addUserCard = this.addUserCard.bind(this);
  }

  addUserCard(newCard: IProduct): void {
    this.setState({ userCards: [...this.state.userCards, newCard] }, () => {
      console.log(this.state.userCards);
    });
  }

  render() {
    return (
      <div className="container page" data-testid="page-form">
        <h2 className="title">Form</h2>

        <CreateCard addUserCard={this.addUserCard} />

        <h3 className={styles.form__subtitle}>Your Cards</h3>

        <CardList />
      </div>
    );
  }
}
