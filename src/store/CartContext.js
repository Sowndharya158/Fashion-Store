import React,{Children, createContext,useState} from "react";

const initialState={
    items:[],
    addItem:()=>{},
    removeItem:()=>{},
    updateItemQuantity:()=>{}
} 


export const cartContext=createContext(initialState)

export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([]);

    // Add item to cart
  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.productid === item.productid);
      if (existingItemIndex >= 0) {
        const updatedItem = { ...prevItems[existingItemIndex], quantity: prevItems[existingItemIndex].quantity + 1 };
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex] = updatedItem;
        return updatedCart;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart (decrease quantity or remove entirely)
  const removeItem = (productId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.productid === productId);
      if (itemIndex >= 0 && prevItems[itemIndex].quantity > 1) {
        const updatedItem = { ...prevItems[itemIndex], quantity: prevItems[itemIndex].quantity - 1 };
        const updatedCart = [...prevItems];
        updatedCart[itemIndex] = updatedItem;
        return updatedCart;
      } else {
        return prevItems.filter((item) => item.productid !== productId);
      }
    });
  };

  // Update item quantity in cart
  const updateItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) => 
        item.productid === productId ? { ...item, quantity } : item
      );
      return updatedCart;
    });
  };

  return(
    <cartContext.Provider value={{cartItems,addItem,removeItem,updateItemQuantity,setCartItems}}>{children}</cartContext.Provider>
  )

}