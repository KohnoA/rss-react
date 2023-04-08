import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  additionalClasses?: string;
}

export default function Button({ text, additionalClasses, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${additionalClasses ? additionalClasses : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
