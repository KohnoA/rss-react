import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from '../CreateCard.module.scss';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface InputItemProps {
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  otherAttr?: InputHTMLAttributes<HTMLInputElement>;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export default function InputItem({
  label,
  placeholder,
  type,
  otherAttr,
  register,
  error,
}: InputItemProps) {
  return (
    <label className={styles.formItem}>
      <span className={styles.formItem__label}>{label}:</span>
      <input
        className={`${styles.formItem__input} ${error ? styles.formItem__input_error : ''}`}
        type={type || 'text'}
        {...(placeholder ? { placeholder: placeholder } : {})}
        {...register}
        {...otherAttr}
      />
      {error && (
        <span className={styles.formItem__errorMessage}>
          {error?.message || 'Please fill in the field'}
        </span>
      )}
    </label>
  );
}
