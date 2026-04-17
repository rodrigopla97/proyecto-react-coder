import { Dispatch, ReactNode, SetStateAction } from "react";

export type Product = {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
};

export type CartItem = {
  id: number;
  name: string;
  image: string;
  quantity: number;
};

export type CartPageStateType = {
  items: CartItem[];
  isModalOpen: boolean;
};

export type CartContextType = {
  getCartPageState: CartPageStateType;
  setCartPageState: Dispatch<SetStateAction<CartPageStateType>>;
};

export type ProviderProps = {
  children: ReactNode;
};

export type CardItemProps = {
  product: Product;
};

export type CardContainerProps = {
  product: Product[];
  pathProp?: string;
};

export type ItemListContainerProps = {
  namePath?: string;
  titlePath?: string;
};

export type ItemDetailContainerProps = {
  load: boolean;
  product: Product;
};

export type ItemListModalProps = {
  children: ReactNode;
  onClose: () => void;
  loading?: boolean;
};
