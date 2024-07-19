import React, { useState } from 'react'
import "./LoginPoopup.css"
import { assets } from '../assets/frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState]=useState("Login")

  return (
    <div className='login-popup' id='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      
      <div className="login-popup-input">
        {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
        <input type="email" placeholder='Your email id ' required/>
        <input type="password" placeholder='Password' required/>
      </div>
      <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing i agree to the terms of user condition and privacy policy.</p>
        </div>
        {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
        <p>Already have an acoount? <span onClick={()=>setCurrentState("Login")}>login here</span></p>}
        
        
    </form>
    </div>
  )
}

export default LoginPopup
