import { createContext } from "react";
import { CartContextType } from "../entities/entities";

export const CartContext = createContext<CartContextType | null>(null);
