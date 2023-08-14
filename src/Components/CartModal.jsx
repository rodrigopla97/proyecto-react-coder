import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray border-solid border-gray-dark border p-4 rounded-lg">
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 && <p>Carrito Vacio</p>}
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} category={item.category}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
