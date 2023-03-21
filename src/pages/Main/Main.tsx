import { Component } from 'react';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';
import CardList from 'src/components/CardList/CardList';

export default class Main extends Component {
  render() {
    return (
      <div className="container page" data-testid="page-main">
        <h2 className="title">Main</h2>

        <SearchPanel />

        <CardList />
      </div>
    );
  }
}
