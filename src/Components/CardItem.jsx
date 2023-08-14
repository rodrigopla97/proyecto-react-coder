import React, { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListModal from "./ItemListModal";

const CardItem = ({ product, addToCart }) => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleShowModal = () => {
    setLoading(true);
    setShowModal(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    addToCart(product, count);
    setCount(0);
  };

  return (
    <div className="bg-gray rounded-lg shadow-lg p-4 mx-2 mb-4 max-w-xs flex flex-col items-center text-center w-300 h-400">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-50 h-1/2 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-auto">{product?.name}</h3>

      <span>Precio: ${product?.id + 100}</span>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
        onClick={handleShowModal}
      >
        Más detalles
      </button>
      <div className="mt-auto mb-1rem ">
        <div className="border-solid border-2 border-white rounded-lg text-white font-black">
          <button className="py-2 px-4 w-20" onClick={handleIncrement}>
            +
          </button>
          <span className="mx-2">{count}</span>
          <button className=" py-2 px-4  w-20" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      {showModal && (
        <ItemListModal onClose={handleCloseModal}>
          <ItemDetailContainer load={loading} />
        </ItemListModal>
      )}
    </div>
  );
};

export default CardItem;
