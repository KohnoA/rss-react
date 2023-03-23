import { Component } from 'react';
import CreateCard from 'src/components/CreateCard/CreateCard';
import { IProduct } from 'src/types/IProduct';

interface FormState {
  userCards: IProduct[];
}

export default class Form extends Component<unknown, FormState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      userCards: [],
    };
  }

  addUserCard(newCard: IProduct): void {
    this.setState({ userCards: [...this.state.userCards, newCard] });
    console.log(this.state.userCards);
  }

  render() {
    return (
      <div className="container page" data-testid="page-form">
        <h2 className="title">Form</h2>

        <CreateCard addUserCard={this.addUserCard} />
      </div>
    );
  }
}
