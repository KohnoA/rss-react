import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './CreateCard.module.scss';
import Button from '../UI/Button/Button';
import { START_LINE_CAPITAL_LETTER, CATEGORIES_OF_PRODUCTS } from 'src/constants/constants';
import { IProduct } from 'src/types/IProduct';
import Group from '../UI/formItems/Group/Group';
import Input from '../UI/formItems/Input/Input';
import Select from '../UI/formItems/Select/Select';

interface FormInputs {
  title: string;
  price: number;
  rate: number;
  date: string;
  image: FileList;
  category: string;
  condition: string;
  tags: string[];
}

interface CreateCardProps {
  handlerAddCard: (newCard: IProduct) => void;
}

export default function CreateCard({ handlerAddCard }: CreateCardProps) {
  const [confirm, setConfirm] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ reValidateMode: 'onSubmit' });

  const showConfirmMessage = () => {
    setConfirm((prev) => !prev);
    setTimeout(() => setConfirm((prev) => !prev), 1000);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    handlerAddCard({
      ...data,
      id: Date.now(),
      image: URL.createObjectURL(data.image[0]),
    });
    showConfirmMessage();
    reset();
  };

  return (
    <form className={styles.createCard} action="#" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Product name"
        placeholder="IPhone X"
        register={register('title', {
          required: true,
          pattern: {
            value: START_LINE_CAPITAL_LETTER,
            message: 'Must start with a capital letter',
          },
        })}
        error={errors.title}
      />
      <Input
        label="Price (&#8364;)"
        placeholder="49.99"
        type="number"
        otherAttr={{ step: 'any' }}
        register={register('price', { required: true, valueAsNumber: true })}
        error={errors.price}
      />
      <Input
        label="Rate"
        placeholder="4.5"
        type="number"
        otherAttr={{ step: 'any' }}
        register={register('rate', { required: true, valueAsNumber: true })}
        error={errors.rate}
      />
      <Input
        label="Data of purchase"
        type="date"
        register={register('date', { required: true })}
        error={errors.date}
      />
      <Input
        label="Photo"
        type="file"
        otherAttr={{ accept: 'image/*' }}
        register={register('image', { required: true })}
        error={errors.image}
      />
      <Select
        caption="Category"
        defaultOption="Choose a category"
        options={CATEGORIES_OF_PRODUCTS}
        register={register('category', { required: true })}
        error={errors.category}
      />
      <Group
        caption="Tags"
        type="checkbox"
        register={register('tags', { required: true })}
        error={errors.tags}
        items={[
          { value: 'urgently', message: 'I want to sell urgently' },
          { value: 'bargain', message: 'Bargaining possible' },
        ]}
      />
      <Group
        caption="Condition"
        type="radio"
        register={register('condition', { required: true })}
        error={errors.condition}
        items={[{ value: 'New' }, { value: 'Used' }]}
      />
      {confirm && <div className={styles.createCard__confirm}>&#10003; Card created!</div>}
      <Button additionalClasses={styles.createCard__create} text="Create New Card" />
    </form>
  );
}
