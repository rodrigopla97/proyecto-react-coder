import 'core-js';
import './App.css';
import 'tailwindcss/tailwind.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ListContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="appcontainer mx-auto pb-8 pt-0 bg-zinc-500">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer namePath={""} titlePath={"Nuestros Productos"} />} />
          <Route exact path='/destacado' element={<ItemListContainer namePath={"destacado"} titlePath={"Mirá nuestros productos electrónicos"} />} />
          <Route exact path='/ofertas' element={<ItemListContainer namePath={"oferta"} titlePath={"Aprovecha nuestros productos en liquidación"} />} />
          {/* <Route exact path='/' element={<ItemListContainer producto={"productos"} />} />
          <Route exact path='/ropa' element={<ItemListContainer producto={"ropa"} />} />
          <Route exact path='/joyeria' element={<ItemListContainer producto={"joyeria"} />} />
          <Route exact path='/electronica' element={<ItemListContainer producto={"electronica"} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;