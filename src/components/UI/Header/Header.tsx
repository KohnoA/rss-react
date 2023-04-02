import styles from './Header.module.scss';
import Navigation from 'src/components/Navigation/Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <Navigation />
      </div>
    </header>
  );
}
