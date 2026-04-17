import { useState } from "react";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemListModal } from "./ItemListModal";
import { CardItemProps, CartItem } from "../entities/entities";
import { useCart } from "../context/cartProvider";

export function CardItem({ product }: CardItemProps) {
  const { setCartPageState } = useCart();
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) setCount(count - 1);
  }

  function handleShowModal() {
    setLoading(true);
    setShowModal(true);
    setTimeout(() => setLoading(false), 2000);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddToCart() {
    if (count <= 0) return;
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: count,
    };
    setCartPageState((state) => ({ ...state, items: [...state.items, newItem] }));
    setCount(0);
  }

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
      <div className="mt-auto mb-1rem">
        <div className="border-solid border-2 border-white rounded-lg text-white font-black">
          <button className="py-2 px-4 w-20" onClick={handleDecrement}>
            -
          </button>
          <span className="mx-2">{count}</span>
          <button className="py-2 px-4 w-20" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      {showModal && (
        <ItemListModal onClose={handleCloseModal} loading={loading}>
          <ItemDetailContainer load={loading} product={product} />
        </ItemListModal>
      )}
    </div>
  );
}
