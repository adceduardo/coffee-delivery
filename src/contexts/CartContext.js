'use client';
import { produce } from 'immer';

import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addToCart(product) {
    const existProduct = cartItems.findIndex((item) => item.id === product.id);

    const newCart = produce(cartItems, (draft) => {
      if (existProduct < 0) {
        draft.push(product);
      } else {
        draft[existProduct].quantity += product.quantity;
      }
    });

    setCartItems(newCart);
  }

  function cleanCart(){
    setCartItems([])
  }


  function changeCartProductQuantity(cartProductId, functionality) {
    const newCart = produce(cartItems, (draft) => {
      const productExist = draft.findIndex(
        (cartItem) => cartItem.id === cartProductId
      );

      if (productExist >= 0) {
        const item = draft[productExist];

        if (functionality === 'incrementProduct') {
          item.quantity += 1;
        } else if (functionality === 'decrementProduct' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartProductId) {
    const newCart = produce(cartItems, (draft) => {
      const productExist = draft.findIndex(
        (cartItem) => cartItem.id === cartProductId
      );
      if (productExist >= 0) {
        draft.splice(productExist, 1);
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartQuantity,
        changeCartProductQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
