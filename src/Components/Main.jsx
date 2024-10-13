// App.jsx
import React, { useState, useRef,useContext } from 'react';
import Header from './Header';
import Shop from './Shop';
import Cart from './Cart';
import { cartContext } from '../store/CartContext';
export default function Main() {
    const {cartItems,addItem,removeItem,updateItemQuantity}=useContext(cartContext)
  const modal = useRef();
  const [cartselected, setCartSelected] = useState(false);
  
  
function handleAddCart(item){
   addItem(item)
}
  

function handleDeleteItem(item)
{
    removeItem(item)
}
  const handleCart = () => {
    setCartSelected(true);
    modal.current && modal.current.open(); // Ensure modalRef is not null before accessing open()
  };

  const handleCloseCart = () => {
    setCartSelected(false);
    modal.current && modal.current.close(); // Ensure modalRef is not null before accessing close()
  };

  const addProductToCart = (item) => {
   addItem(item)
  };

  return (
    <>
      <Header opencart={handleCart} cartItems={cartItems} />
      <Shop setItem={addProductToCart} />
      {cartselected && <Cart closeCart={handleCloseCart} ref={modal} cartItems={cartItems} AddCount={handleAddCart} DeleteItem={handleDeleteItem}/>}
    </>
  );
}


