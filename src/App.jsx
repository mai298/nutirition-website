import './App.css'
import { Routes, Route } from "react-router-dom";
// import Address from "./pages/address/Address";
// import Profile from "./pages/profile/Profile";
import GetInTouch from "./pages/Getintouch/GetInTouch";
import BmiCalc from './pages/Bmi/BmiCalc';
import Root from "./Components/Root";
import HealthPackages from './Pages/Health package/HealthPackages';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import {useState } from 'react';
import Sign from './Components/sign/Sign';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';


function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);


  const handleAddToCart = (selectedProduct) => {
    setCartProducts([...cartProducts, selectedProduct]);

    setCartCount(cartCount + 1);
    setSelectedProduct(selectedProduct);

  };


  return (
    <>
      <div className='App'>
      <Routes>
      <Route path="/" element={<Root cartCount={cartCount} setIsAuthenticated={setIsAuthenticated}  isAuthenticated={isAuthenticated} />}>
        <Route index element={<Sign setIsAuthenticated={setIsAuthenticated} />} /> 
        
        <Route path='/home'  element={<Home />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products handleAddToCart={handleAddToCart} products={products} setProducts={setProducts} />} />
        <Route path="/product-details" element={<ProductDetails selectedProduct={selectedProduct} cartProducts={cartProducts} />} />

        {/* <Route path="/address" element={<Address />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/health" element={<HealthPackages />} />
        <Route path="/get_in_touch" element={<GetInTouch />} />
        <Route path="/bmi" element={<BmiCalc />} />
        {/* <Route path="/orders" element={<Paymentinfo />} /> */}
        </Route>
      </Routes>
      </div>
    
    </>
  )
}

export default App
