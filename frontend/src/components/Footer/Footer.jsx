import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to <strong>FoodieHub</strong> – your one-stop destination for fresh, delicious, and hygienic meals.  
  We bring you a wide variety of cuisines, from healthy salads and desserts to pastas, rolls, and more.  
  Our mission is to make food ordering simple, fast, and enjoyable.  
  Taste the joy of dining, anytime and anywhere!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>8072017039</li>
                    <li>godsonflinto.it22@bitsathy.ac.in</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright @2025 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer