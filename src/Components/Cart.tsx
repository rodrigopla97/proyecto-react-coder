import { useCart } from "../context/cartProvider";

export function Cart() {
  const { getCartPageState } = useCart();
  const { items } = getCartPageState;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {items.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - Cantidad: {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}
