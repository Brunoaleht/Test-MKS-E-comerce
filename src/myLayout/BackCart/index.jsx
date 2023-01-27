import P from 'prop-types'
import styles from './BackCart.module.css';

export const BackCart = ({ show, Click }) => {
  return show && <div className={styles.backCart} onClick={Click}></div>;
};
BackCart.propTypes = {
  show: P.bool.isRequired,
  Click: P.func.isRequired
}
