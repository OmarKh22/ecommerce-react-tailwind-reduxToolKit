import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import {store} from './app/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
