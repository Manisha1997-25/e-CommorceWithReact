import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className='heroSection'>
      <div className='heroContent'>
        <p className='heroTitle'>Welcome To Our Store</p>
        <h1>Shop Smart
          <br />
          <span>Live Better</span>
        </h1>
        <p className='heroDescription'>Discover amazing products at the best prices. Shop your favorite items and enjoy a simple, fast and secure shopping experience.</p>
        <button className='shopBtn' onClick={() => navigate('/products')}>Shop Now</button>
      </div>
      <div className='heroImage'>
        <img src="./images/heroImage.png" alt="E-Commerce Shopping" />
      </div>
    </section>
  )
}

export default HeroSection