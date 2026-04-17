import { useCart } from "../context/cartProvider";

export function CartPage() {
  const { getCartPageState, setCartPageState } = useCart();
  const { items } = getCartPageState;

  function increaseQuantity(id: number) {
    setCartPageState((state) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  }

  function decreaseQuantity(id: number) {
    setCartPageState((state) => ({
      ...state,
      items: state.items
        .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0),
    }));
  }

  function removeFromCart(id: number) {
    setCartPageState((state) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }));
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
      <ul>
        {items.map((item) => (
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
}
