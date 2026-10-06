import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className='col-md-3 mb-4'>
            <h3 className='footerLogo'>E-Commorce</h3>
            <p>Your one-stop online shop for groceries, beauty, furniture, fragrances and more.</p>
            <div className="socialIcons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
            </div>
          </div>
          <div className='col-md-3 mb-4'>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Cart</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              
            </ul>
          </div>
          <div className='col-md-3 mb-4'>
            <h5>Categories</h5>
            <ul>
              <li><a href="#">Groceries</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Fragrances</a></li>
              <li><a href="#">Electronics</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>Ahemadabad, Gujrat, India</p>
            <p>+91 7218024126</p>
            <p>support@ecommorce.com</p>
          </div>
        </div>
        <hr />
        <div className="footerBottom">
          <p>© 2026 E-Commorce. All Rights Reserved</p>
          <div> 
            <span>🔒 Secure Payment</span> 
            <span> 💳 Easy & Safe Checkout</span> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer