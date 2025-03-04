import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const navbar = ({setShowLogin}) => {
const [menu,setMenu]=useState("home");
const {getTotalcartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#ExploreMenu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}> Mobile App</a>
        <a href='#Footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
        <Link to="/cart" ><img src={assets.basket_icon}/></Link> 
        <div className={getTotalcartAmount()==0?"":'dot'}>
        </div>
        </div>
        <button onClick={()=>setShowLogin(true)} >sign in</button>
        
      </div>
    </div>
  )
}

export default navbar
