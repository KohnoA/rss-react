import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from 'src/components/UI/Navigation/Navigation';
import { APP_ROUTES } from 'src/constants/appRoutes';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrapper}`}>
        <Navigation />
        <p className={styles.header__currentPage}>
          {APP_ROUTES.find((item) => item.link === location.pathname)?.title || 'Not Found'}
        </p>
      </div>
    </header>
  );
}
