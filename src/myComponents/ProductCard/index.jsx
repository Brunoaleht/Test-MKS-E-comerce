import { FaTrashAlt } from 'react-icons/fa';
import styles from './ProductCard.module.css';
import { useState } from 'react';

export const ProductCard = ({ id, name, photo, price, handleClick }) => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    return setCounter((c) => c + 1);
  };
  const decrementCounter = () => {
    return setCounter((c) => c - 1);
  };
  if (counter < 0) {
    setCounter(0);
  }

  return (
    <div className={styles.productCard}>
      <img src={photo} alt={name} />
      <div className={styles.title}>{name}</div>
      <div className={styles.contentCounter}>
        <div className={styles.label}>unid</div>
        <div className={styles.counter}>
          <button className={styles.buttonCounter} onClick={() => decrementCounter()}>
            -
          </button>
          {counter}
          <button className={styles.buttonCounter} onClick={() => incrementCounter()}>
            +
          </button>
        </div>
      </div>
      <div className={styles.price}>{`R$ ${price * counter}`}</div>
      <div className={styles.iconDelete}>
        <div className={styles.icon} onClick={() => handleClick(id)}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  id: P.number.isRequired,
  name: P.string.isRequired,
  photo: P.string.isRequired,
  price: P.number.isRequired,
  handleClick: P.func.isRequired,
};
