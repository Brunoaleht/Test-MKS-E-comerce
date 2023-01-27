import styles from './PostCard.module.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';

type props = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  BuyClick: Function;
};
export const PostCard = ({ id, name, photo, description, price, BuyClick }: props) => {
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
