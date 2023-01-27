import P from 'prop-types';
import styles from './PostCard.module.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const PostCard = ({ id, name, photo, description, price, BuyClick }) => {
  return (
    <div className={styles.postCard}>
      <img src={photo} alt={name} />
      <div className={styles.contentInf}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{`R$ ${price}`}</div>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.buyButton}>
        <button onClick={() => BuyClick(id, photo, name, price)}>
          <HiOutlineShoppingBag />
          Comprar
        </button>
      </div>
    </div>
  );
};
PostCard.propTypes = {
  id: P.number.isRequired,
  name: P.string.isRequired,
  description: P.string.isRequired,
  photo: P.string.isRequired,
  price: P.number.isRequired,
  BuyClick: P.func.isRequired,
};
