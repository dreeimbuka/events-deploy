import React from 'react'
import'./Hero.css'
import dark_arrow from'../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Nice to meet you</h1>
            <p>We at Valdez Eventz Planning Services turn your ideas into life-changing events! 
              Our creative flare and painstaking attention to detail enable us to create amazing events that
               are specifically customized to your individual preferences and style. Whether you're throwing 
               a large celebration or a little get-together,
               our staff is here to make sure every detail is perfect.
            </p>
            <button className="btn">Explore more  <img src={dark_arrow} alt="" /> </button>
        </div>

    </div>
  )
}

export default Hero