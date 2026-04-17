import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { CartContextType, CartPageStateType, ProviderProps } from "../entities/entities";
import { INITIAL_STATE } from "../constants/constants";

export default function CartProvider({ children }: ProviderProps) {
  const [getCartPageState, setCartPageState] = useState<CartPageStateType>(INITIAL_STATE);

  return (
    <CartContext.Provider value={{ getCartPageState, setCartPageState }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext) as CartContextType;
}
