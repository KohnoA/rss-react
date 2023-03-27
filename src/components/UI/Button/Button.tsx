import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  additionalClasses?: string;
}

export default function Button({ text, additionalClasses }: ButtonProps) {
  return (
    <button className={`${styles.button} ${additionalClasses ? additionalClasses : ''}`}>
      {text}
    </button>
  );
}
