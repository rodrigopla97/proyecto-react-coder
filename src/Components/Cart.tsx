import React from "react";
import { CartItem } from "../entities/entities";

type CartProps = {
  cartItems: CartItem[];
};

const Cart = ({ cartItems }: CartProps) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - Cantidad: {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
