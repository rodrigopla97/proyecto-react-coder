import { Dispatch, ReactNode, SetStateAction } from "react";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  quantity: number;
};

export type CartPageStateType = {
  items: CartItem[];
};

export type CartContextType = {
  getCartPageState: CartPageStateType;
  setCartPageState: Dispatch<SetStateAction<CartPageStateType>>;
};

export type ProviderProps = {
  children: ReactNode;
};
