import styles from './Footer.module.scss';
import { RSS_REACT_COURSE_LINK, GITHUB_KOHNOA } from 'src/constants/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrapper}`}>
        <a className={styles.footer__link} href={GITHUB_KOHNOA}>
          KohnoA
        </a>
        <a className={styles.footer__link} href={RSS_REACT_COURSE_LINK}>
          Rsschool
        </a>
      </div>
    </footer>
  );
}
