import { useCart } from "../context/cartProvider";

export function CartModal() {
  const { getCartPageState, setCartPageState } = useCart();
  const { items, isModalOpen } = getCartPageState;

  if (!isModalOpen) return null;

  function onClose() {
    setCartPageState((state) => ({ ...state, isModalOpen: false }));
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray border-solid border-gray-dark border p-4 rounded-lg">
        <h2>Carrito de Compras</h2>
        {items.length === 0 && <p>Carrito Vacio</p>}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
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
}
