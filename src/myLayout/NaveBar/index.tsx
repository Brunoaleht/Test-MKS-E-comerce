import styles from './NaveBar.module.css';
import { GiShoppingCart } from 'react-icons/gi';
type props = {
  Click: Function,
  numberBugItens: number,
};
export const NaveBar = ({ Click, numberBugItens }: props) => {
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
