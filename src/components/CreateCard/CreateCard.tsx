import React, { Component } from 'react';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';
import InputItem from './InputItem/InputItem';
import SelectItem from './SelectItem/SelectItem';
import GroupItem from './GroupItem/GroupItem';
import { CATEGORIES_OF_PRODUCTS } from 'src/constants/constants';

export default class CreateCard extends Component<unknown> {
  private title: React.RefObject<HTMLInputElement>;
  private price: React.RefObject<HTMLInputElement>;
  private rate: React.RefObject<HTMLInputElement>;
  private date: React.RefObject<HTMLInputElement>;
  private image: React.RefObject<HTMLInputElement>;
  private category: React.RefObject<HTMLSelectElement>;
  private new: React.RefObject<HTMLInputElement>;
  private used: React.RefObject<HTMLInputElement>;
  private urgently: React.RefObject<HTMLInputElement>;
  private bargain: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.title = React.createRef();
    this.price = React.createRef();
    this.rate = React.createRef();
    this.date = React.createRef();
    this.image = React.createRef();
    this.category = React.createRef();
    this.new = React.createRef();
    this.used = React.createRef();
    this.urgently = React.createRef();
    this.bargain = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent): void {
    console.log(this.title.current?.value);
    console.log(this.price.current?.value);
    console.log(this.rate.current?.value);
    console.log(this.date.current?.value);
    console.log(this.image.current?.files);
    console.log(this.category.current?.value);
    console.log(this.urgently.current?.checked);
    console.log(this.bargain.current?.checked);
    console.log(this.new.current?.checked);
    console.log(this.used.current?.checked);

    event.preventDefault();
  }

  render() {
    return (
      <form className={styles.createCard} action="#" onSubmit={this.handleSubmit}>
        <InputItem
          id="title"
          type="text"
          label="Product name:"
          placeholder="IPhone X"
          innerRef={this.title}
        />

        <InputItem
          id="price"
          type="number"
          label="Price (&#8364;):"
          placeholder="49.99"
          innerRef={this.price}
        />

        <InputItem id="rate" type="number" label="Rate:" placeholder="4.5" innerRef={this.rate} />
        <InputItem id="date" type="date" label="Date of purchase:" innerRef={this.date} />
        <InputItem id="image" type="file" label="Photo:" accept="image/*" innerRef={this.image} />

        <SelectItem
          id="category"
          label="Category:"
          options={CATEGORIES_OF_PRODUCTS}
          innerRef={this.category}
        />

        <GroupItem
          caption="Tags:"
          type="checkbox"
          items={[
            {
              label: 'I want to sell urgently.',
              innerRef: this.urgently,
            },
            {
              label: 'Bargaining possible',
              innerRef: this.bargain,
            },
          ]}
        />

        <GroupItem
          caption="Product condition:"
          type="radio"
          name="condition"
          items={[
            {
              label: 'New',
              innerRef: this.new,
            },
            {
              label: 'Used',
              innerRef: this.used,
            },
          ]}
        />

        <Button additionalClasses={styles.createCard__create} text="Create New Card" />
      </form>
    );
  }
}
