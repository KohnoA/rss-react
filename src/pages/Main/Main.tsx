import { Component } from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';
import { IProduct } from 'src/types/IProduct';
import { PRODUCTS_DATA } from 'src/constants/productsData';

interface MainState {
  cardsData: IProduct[];
}

export default class Main extends Component<unknown, MainState> {
  constructor(props: MainState) {
    super(props);

    this.state = {
      cardsData: [],
    };
  }

  componentDidMount(): void {
    this.setState({ cardsData: PRODUCTS_DATA });
  }

  render() {
    return (
      <div className="container page" data-testid="page-main">
        <h2 className="title">Main</h2>

        <SearchPanel />

        <CardList cardsData={this.state.cardsData} />
      </div>
    );
  }
}
