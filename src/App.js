import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shop, Carts } from './pages/index'
import {Navbar ,  ShoppingCartProvider} from './Conponents/index'

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Cart" element={<Carts />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
