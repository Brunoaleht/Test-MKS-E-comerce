import { useState } from 'react';
import { BackCart } from '../src/myLayout/BackCart';
import { MyCarProducts } from '../src/myTelas/MyCarProducts';
import { Posts } from '../src/myComponents/Posts';
import { Footer } from '../src/myLayout/Footer';
import { NaveBar } from '../src/myLayout/NaveBar';
import { Content } from '../src/myLayout/Content';

export default function Ecommerce() {
  const [sideToggle, setSideToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState(cart);

  const handleAddProductToCart = (id, photo, name, price) => {
    const itemObject = { id, photo, name, price };
    const product = cart.find((p) => p.id === itemObject.id);
    if (product) {
      setCart(cart);
    } else {
      setCart([...cart, itemObject]);
    }
  };
  const handleRemoveItem = (itemId) => {
    const arrFilterCart = cart.filter((p) => p.id !== itemId);
    setCart(arrFilterCart);
  };
  // const handleSubmitClick = (Bug) => {
  //   setPurchasedProducts(Bug);
  //   console.log(purchasedProducts)
  // };

  //Used the json-server, represents the products purchased
  function handleSubmitClick(bug) {
    //inicializando o cost e o serviçe
    setPurchasedProducts(bug);

    fetch('http://localhost:5000/myProductsBug', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(purchasedProducts),
    })
      .then((resp) => resp.json(purchasedProducts))
      .catch((err) => console.log(err));
  }

  return (
    <div id="Loja">
      <NaveBar Click={() => setSideToggle(true)} numberBugItens={cart.length} />
      <MyCarProducts
        show={sideToggle}
        closedClick={() => setSideToggle(false)}
        myCart={cart}
        removeItem={handleRemoveItem}
        SubmitClick={handleSubmitClick}
      />
      <BackCart show={sideToggle} Click={() => setSideToggle(false)} />
      <Content>
        <Posts AddItens={handleAddProductToCart} />
      </Content>
      <Footer />
    </div>
  );
}
