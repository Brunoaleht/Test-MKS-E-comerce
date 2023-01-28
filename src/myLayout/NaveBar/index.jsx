import P from 'prop-types';
import styles from './NaveBar.module.css';
import { GiShoppingCart } from 'react-icons/gi';

export const NaveBar = ({ Click, numberBugItens }) => {
  return (
    <nav className={styles.naveBar}>
      <div className={styles.logo}>
        <span>MSK</span>sistema
      </div>
      <div className={styles.buttonShoppingCard} onClick={() => Click()}>
        <span className={styles.icon}>
          <GiShoppingCart />
        </span>
        <span className={styles.unid}>{numberBugItens}</span>
      </div>
    </nav>
  );
};
NaveBar.propTypes = {
  Click: P.func.isRequired,
  numberBugItens: P.number.isRequired,
};
