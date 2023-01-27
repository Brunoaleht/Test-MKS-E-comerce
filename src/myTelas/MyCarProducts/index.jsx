import P from 'prop-types';
import { useState } from 'react';

import { FaRegTimesCircle } from 'react-icons/fa';

import styles from './MyCarProducts.module.css';

import { Products } from '../../myComponents/Products';

export const MyCarProducts = ({ show, closedClick, myCart, removeItem, SubmitClick }) => {
  const subTotal = myCart.reduce((acc, cur) => acc+ cur.price, 0)


  return (
    show && (
      <div className={styles.MyCarProducts}>
        <div className={styles.myBug}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>Carrinho de Compras</h1>
            </div>
              <div className={styles.closedButton} onClick={closedClick}>
                <FaRegTimesCircle />
              </div>
          </div>
          <div className={styles.ContentProducts}>
            <div className={styles.myProducts}>
              <Products myCartProducts={myCart} clickRemoveItem={removeItem}/>
            </div>
          </div>
          <div className={styles.contentTotal}>
            <div className={styles.ToPay}>
              Total: R$<span>{subTotal}</span>
            </div>
            <button className={styles.payButton} onClick={()=>SubmitClick(myCart)}>
              Finalizar Compras
            </button>
          </div>
        </div>
      </div>
    )
  );
};
MyCarProducts.propTypes = {
  show: P.bool.isRequired,
  closedClick: P.func.isRequired,
  myCart: P.array.isRequired,
  removeItem: P.func.isRequired,
  SubmitClick: P.func.isRequired,
};
