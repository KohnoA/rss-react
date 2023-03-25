import React, { Component } from 'react';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';
import InputItem from './InputItem/InputItem';
import SelectItem from './SelectItem/SelectItem';
import GroupItem from './GroupItem/GroupItem';
import { CATEGORIES_OF_PRODUCTS } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';
import { checkValidation } from 'src/utils/checkValidation';

interface CreateCardProps {
  addUserCard: (newCard: IProduct) => void;
}

interface CreateCardSate {
  showMessage: boolean;
  validCase: {
    [key: string]: boolean;
  };
}

export default class CreateCard extends Component<CreateCardProps, CreateCardSate> {
  private price: React.RefObject<HTMLInputElement>;
  private title: React.RefObject<HTMLInputElement>;
  private rate: React.RefObject<HTMLInputElement>;
  private date: React.RefObject<HTMLInputElement>;
  private image: React.RefObject<HTMLInputElement>;
  private category: React.RefObject<HTMLSelectElement>;
  private new: React.RefObject<HTMLInputElement>;
  private used: React.RefObject<HTMLInputElement>;
  private urgently: React.RefObject<HTMLInputElement>;
  private bargain: React.RefObject<HTMLInputElement>;

  constructor(props: CreateCardProps) {
    super(props);
    this.state = {
      showMessage: false,
      validCase: {
        isValidTitle: true,
        isValidPrice: true,
        isValidRate: true,
        isValidDate: true,
        isValidImage: true,
        isValidCategory: true,
        isValidNewOrUsed: true,
        isValidTags: true,
      },
    };
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
    const titleValue = this.title.current?.value ?? '';
    const priceValue = this.price.current?.value ?? '';
    const rateValue = this.rate.current?.value ?? '';
    const dateValue = this.date.current?.value ?? '';
    const categoryValue = this.category.current?.value ?? '';
    const imageValue = this.image.current?.files?.[0] ?? '';
    const conditionArrValue = [this.new.current, this.used.current];
    const tagsArrValue = [this.urgently.current, this.bargain.current];

    this.setState(
      {
        validCase: {
          isValidTitle: checkValidation(titleValue, true),
          isValidPrice: checkValidation(priceValue),
          isValidRate: checkValidation(rateValue),
          isValidDate: checkValidation(dateValue),
          isValidCategory: checkValidation(categoryValue),
          isValidImage: !!imageValue,
          isValidNewOrUsed: conditionArrValue.some((e) => e?.checked),
          isValidTags: tagsArrValue.some((e) => e?.checked),
        },
      },
      () => {
        const canSubmitForm = Object.values(this.state.validCase).every(Boolean);
        if (canSubmitForm) {
          this.props.addUserCard({
            id: Date.now(),
            title: titleValue,
            price: Number(priceValue),
            image: imageValue && URL.createObjectURL(imageValue),
            rate: Number(rateValue),
            date: dateValue,
            category: categoryValue,
            condition: conditionArrValue.find((e) => e?.checked)!.value,
            tags: {
              urgently: this.urgently.current!.checked,
              bargain: this.bargain.current!.checked,
            },
          });
          this.showConfirmMessage();
          this.clearForm();
        }
      }
    );
    event.preventDefault();
  }

  clearForm(): void {
    this.title.current!.value = '';
    this.price.current!.value = '';
    this.rate.current!.value = '';
    this.date.current!.value = '';
    this.category.current!.value = '';
    this.image.current!.value = '';
    this.new.current!.checked = false;
    this.used.current!.checked = false;
    this.urgently.current!.checked = false;
    this.bargain.current!.checked = false;
  }

  showConfirmMessage(): void {
    this.setState({ showMessage: true }, () => {
      const timeoutId = setTimeout(() => {
        this.setState({ showMessage: false }, () => clearTimeout(timeoutId));
      }, 1000);
    });
  }

  render() {
    const { showMessage, validCase } = this.state;
    return (
      <form className={styles.createCard} action="#" onSubmit={this.handleSubmit}>
        <InputItem
          id="title"
          type="text"
          label="Product name:"
          placeholder="IPhone X"
          innerRef={this.title}
          isValid={validCase.isValidTitle}
        />
        <InputItem
          id="price"
          type="number"
          label="Price (&#8364;):"
          placeholder="49.99"
          innerRef={this.price}
          isValid={validCase.isValidPrice}
        />
        <InputItem
          id="rate"
          type="number"
          label="Rate:"
          placeholder="4.5"
          innerRef={this.rate}
          isValid={validCase.isValidRate}
        />
        <InputItem
          id="date"
          type="date"
          label="Date of purchase:"
          innerRef={this.date}
          isValid={validCase.isValidDate}
        />
        <InputItem
          id="image"
          type="file"
          label="Photo:"
          accept="image/*"
          innerRef={this.image}
          isValid={validCase.isValidImage}
        />
        <SelectItem
          id="category"
          label="Category:"
          options={CATEGORIES_OF_PRODUCTS}
          innerRef={this.category}
          isValid={validCase.isValidCategory}
        />
        <GroupItem
          caption="Tags:"
          type="checkbox"
          isValid={validCase.isValidTags}
          items={[
            { label: 'I want to sell urgently.', innerRef: this.urgently },
            { label: 'Bargaining possible', innerRef: this.bargain },
          ]}
        />
        <GroupItem
          caption="Product condition:"
          type="radio"
          name="condition"
          isValid={validCase.isValidNewOrUsed}
          items={[
            { label: 'New', innerRef: this.new },
            { label: 'Used', innerRef: this.used },
          ]}
        />
        {showMessage && <div className={styles.createCard__confirm}>&#10003; Card created!</div>}
        <Button additionalClasses={styles.createCard__create} text="Create New Card" />
      </form>
    );
  }
}
