import { FieldError, Merge, UseFormRegisterReturn } from 'react-hook-form';
import styles from '../CreateCard.module.scss';

interface GroupItemProps {
  caption: string;
  type: string;
  register: UseFormRegisterReturn;
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  items: Array<{
    value: string;
    message?: string;
  }>;
}

export default function GroupItem({ caption, type, items, register, error }: GroupItemProps) {
  return (
    <div className={styles.formItem}>
      <span
        className={`${styles.formItem__groupLabel} ${
          error ? styles.formItem__groupInput_error : ''
        }`}
      >
        {caption}:
      </span>

      {items.map((item) => (
        <label className={styles.formItem__groupInput} key={item.value}>
          <input {...register} type={type} value={item.value} />
          &nbsp;{item.message || item.value}
        </label>
      ))}

      {error && <span className={styles.formItem__errorMessage}>Please select item</span>}
    </div>
  );
}
