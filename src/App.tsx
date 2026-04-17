import "./App.css";
import "tailwindcss/tailwind.css";
import { Navbar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ListContainer";
import { CartModal } from "./Components/CartModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage } from "./Components/CartPage";
import { CartProvider } from "./context/cartProvider";

export function App() {
  return (
    <CartProvider>
      <div className="appcontainer mx-auto pb-8 pt-0 bg-zinc-500">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/destacado"
              element={
                <ItemListContainer
                  namePath="destacado"
                  titlePath="Mirá nuestros productos electrónicos"
                />
              }
            />
            <Route
              path="/ofertas"
              element={
                <ItemListContainer
                  namePath="oferta"
                  titlePath="Aprovecha nuestros productos en liquidación"
                />
              }
            />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
        <CartModal />
      </div>
    </CartProvider>
  );
}
