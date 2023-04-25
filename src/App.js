import Header from './components/Layout/Header/Header';
import { React, useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart2/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      < Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
