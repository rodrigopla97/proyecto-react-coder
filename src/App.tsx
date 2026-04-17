import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./Components/NavBar";
import ItemListContainer from "./Components/ListContainer";
import CartModal from "./Components/CartModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
import { CartItem } from "./entities/entities";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    if (quantity > 0) {
      const newItem: CartItem = { ...item, quantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  const openCartModal = () => setCartModalOpen(true);
  const closeCartModal = () => setCartModalOpen(false);

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="appcontainer mx-auto pb-8 pt-0 bg-zinc-500">
      <Router>
        <Navbar cartItems={cartItems} openCartModal={openCartModal} />
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route
            path="/destacado"
            element={
              <ItemListContainer
                addToCart={addToCart}
                namePath="destacado"
                titlePath="Mirá nuestros productos electrónicos"
              />
            }
          />
          <Route
            path="/ofertas"
            element={
              <ItemListContainer
                addToCart={addToCart}
                namePath="oferta"
                titlePath="Aprovecha nuestros productos en liquidación"
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </Router>
      {cartModalOpen && (
        <CartModal cartItems={cartItems} onClose={closeCartModal} />
      )}
    </div>
  );
}

export default App;
