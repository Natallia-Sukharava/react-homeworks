import { createContext, useState, ReactNode } from "react";
import { CartContextType, CartProviderProps } from "./types";
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

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
