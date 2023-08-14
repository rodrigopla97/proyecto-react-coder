import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item, index) => (
        <>
          <div key={index} category={item.category}>
            <p>
              {item.name} - Cantidad: {item.quantity}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
