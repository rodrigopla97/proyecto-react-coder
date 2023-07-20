import React from "react";

const ItemListModal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray border-solid border-gray-dark border p-4 rounded-lg">
        {children}
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

export default ItemListModal;
