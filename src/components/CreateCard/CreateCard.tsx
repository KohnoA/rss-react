import React, { Component } from 'react';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';
import InputItem from './InputItem/InputItem';
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
    console.log(this.new.current?.checked);
    console.log(this.used.current?.checked);
    console.log(this.urgently.current?.checked);
    console.log(this.bargain.current?.checked);

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

        <div className={styles.createCard__item}>
          <label htmlFor="category" className={styles.createCard__label}>
            Category:
          </label>
          <select className={styles.createCard__input} id="category" ref={this.category}>
            {CATEGORIES_OF_PRODUCTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.createCard__another}>
          <p className={styles.createCard__another_caption}>Tags:</p>
          <label className={styles.createCard__another_item}>
            <input type="checkbox" ref={this.urgently} /> I want to sell urgently.
          </label>
          <label className={styles.createCard__another_item}>
            <input type="checkbox" ref={this.bargain} /> Bargaining possible
          </label>
        </div>

        <div className={styles.createCard__another}>
          <p className={styles.createCard__another_caption}>Product condition:</p>
          <label className={styles.createCard__another_item}>
            <input name="condition" type="radio" value="new" ref={this.new} /> New
          </label>
          <label className={styles.createCard__another_item}>
            <input name="condition" type="radio" value="used" ref={this.used} /> Used
          </label>
        </div>

        <Button additionalClasses={styles.createCard__create} text="Create New Card" />
      </form>
    );
  }
}
