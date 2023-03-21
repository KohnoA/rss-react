import { Component } from 'react';
import CreateCard from 'src/components/CreateCard/CreateCard';

export default class Form extends Component {
  render() {
    return (
      <div className="container page" data-testid="page-form">
        <h2 className="title">Form</h2>

        <CreateCard />
      </div>
    );
  }
}
