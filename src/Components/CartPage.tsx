import React from "react";
import { CartItem } from "../entities/entities";

type CartPageProps = {
  cartItems: CartItem[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }: CartPageProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-4">
            <div className="flex items-center justify-between">
              <span>{`${item.name} x ${item.quantity}`}</span>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-lg mr-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-lg mr-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-lg"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
