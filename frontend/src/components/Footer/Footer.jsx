import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>In the case of an employee claiming tampering, digital signatures backed by hashing and PKI provide undeniable evidence. The hash guarantees document integrity, while PKI ensures authenticity by binding the public key to the employee’s verified identity. Together, they form a powerful framework that multinational companies use to secure contracts, policies, and financial documents against fraud and manipulation.</p>
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