import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Menu from './pages/Menu';
import { CartProvider } from './context/CartContext';

function AppContext() {
  return (
    <div className="App">
      <>
        <CartProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </>
    </div>
  );
}

export default AppContext;
