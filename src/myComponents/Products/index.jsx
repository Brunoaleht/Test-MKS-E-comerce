import { ProductCard } from '../ProductCard';
import styles from './Products.module.css';
import P from 'prop-types';
export const Products = ({ myCartProducts, clickRemoveItem }) => {
  return (
    <div className={styles.products}>
      {myCartProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          photo={product.photo}
          price={product.price}
          handleClick={clickRemoveItem}
        />
      ))}
    </div>
  );
};
Products.propTypes = {
  myCartProducts: P.array.isRequired,
  clickRemoveItem: P.func.isRequired,
};
