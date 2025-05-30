import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import {store} from './app/store'
import SignupForm from './components/SignupForm';
import PrivateRoute from './pages/PrivateRoute';
import Favorites from './components/Favorites';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductsDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
