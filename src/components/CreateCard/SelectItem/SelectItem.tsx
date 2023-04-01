import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import styles from '../CreateCard.module.scss';

interface SelectItemProps {
  caption: string;
  defaultOption?: string;
  options: string[];
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export default function SelectItem({
  caption,
  defaultOption,
  options,
  register,
  error,
}: SelectItemProps) {
  return (
    <label className={styles.formItem}>
      <span className={styles.formItem__label}>{caption}:</span>

      <select
        className={`${styles.formItem__input} ${error ? styles.formItem__input_error : ''}`}
        defaultValue=""
        {...register}
      >
        <option value="" disabled>
          {defaultOption || 'Select option'}
        </option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error && <span className={styles.formItem__errorMessage}>Please fill in the field</span>}
    </label>
  );
}
