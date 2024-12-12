import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import home1 from '../Assets/home1.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>New Arrivals Only</h2> */}
        <div>
            <div className="hero-hand-icon">
                <p>New </p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>Rentals</p>
            <span className='special-line'>For Everyone</span>
        </div>
        <div className="hero-latest-btn">
            <div onClick={'/newcollections'}>
            Latest Collection For Rent
                
                <img src={arrow_icon} alt="" />
            </div>
        </div>
      </div>
      <div className="hero-right">
            {/* <img src={home1} alt="" /> */}
        </div>
    </div>
  )
}

export default Hero
