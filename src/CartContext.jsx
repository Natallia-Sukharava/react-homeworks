import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (totalPrice = 0, quantity = 1) => {
    setCartCount((prev) => prev + quantity);
    setCartTotal((prev) => prev + totalPrice);
  };  

  return (
    <CartContext.Provider value={{ cartCount, cartTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}