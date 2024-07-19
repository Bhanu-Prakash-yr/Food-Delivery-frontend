import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'; // Assuming 'home' is exported as 'Home'
import Cart from './pages/cart/cart'; // Assuming 'cart' is exported as 'Cart'
import PlaceOrder from './pages/placeorder/placeorder'; // Assuming 'placeorder' is exported as 'PlaceOrder'
import Footer from './components/Footer';
import AppDownload from './components/AppDownload';
import LoginPopup from './components/LoginPopup';


const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} /> {/* Render Home component for '/' path */}
          <Route path='/cart' element={<Cart />} /> {/* Render Cart component for '/cart' path */}
          <Route path='/order' element={<PlaceOrder />} /> {/* Render PlaceOrder component for '/placeorder' path */}
        </Routes>

      </div>

      <AppDownload/>
        <Footer/>
       
    </>
  );
}

export default App;
