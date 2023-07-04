import 'core-js';
import './App.css';
import 'tailwindcss/tailwind.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ListContainer';

function App() {
  return (
    <div className="appcontainer mx-auto py-8">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;