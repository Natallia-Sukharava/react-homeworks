import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (price = 0) => {
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => prev + price);
  };

  return (
    <CartContext.Provider value={{ cartCount, cartTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}