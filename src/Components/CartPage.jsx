import React from "react";

const CartPage = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const setQuantity = (quantity) => {
    return quantity;
  };

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
                <span className="mx-2 hidden">
                  {setQuantity(item.quantity)}
                </span>
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
