import React from 'react'
import "./Footer.css"
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'> 
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
Cras vehicula, mauris eget interdum cursus, ex sapien cursus nulla, at vulputate velit eros vel nulla.
Proin ac libero nec dui convallis scelerisque. Ut ac felis id erat blandit varius non ac libero.</p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>7897997997</li>
                <li>vusyvcadcgv@tomato.com</li>
            </ul>
        </div>
        
    </div>
    <hr />
    <p className='footer-copyight'>Copyright 2024 @Tomato.com -All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
