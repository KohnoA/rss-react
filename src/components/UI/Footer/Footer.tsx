import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { RSS_REACT_COURSE_LINK, GITHUB_KOHNOA } from 'src/constants/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrapper}`}>
        <Link className={styles.footer__link} to={GITHUB_KOHNOA}>
          KohnoA
        </Link>
        <Link className={styles.footer__link} to={RSS_REACT_COURSE_LINK}>
          Rsschool
        </Link>
      </div>
    </footer>
  );
}
