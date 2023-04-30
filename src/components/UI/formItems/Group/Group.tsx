import { FieldError, Merge, UseFormRegisterReturn } from 'react-hook-form';
import styles from '../formItems.module.scss';

interface GroupProps {
  caption: string;
  type: string;
  register: UseFormRegisterReturn;
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  items: Array<{
    value: string;
    message?: string;
  }>;
}

export default function Group({ caption, type, items, register, error }: GroupProps) {
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

      {error && (
        <span className={styles.formItem__errorMessage} data-testid="error-message">
          Please select item
        </span>
      )}
    </div>
  );
}
