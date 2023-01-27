import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        <span className={styles.span}>MKSsistema</span> &copy; Todos os direitos reservados
      </p>
    </footer>
  );
};
