import React from 'react'
import'./About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>ABOUT VALDEZ EVENTZ </h3>
        <h2>Transforming Dreams into Unforgettable Moments: Your Event, Our Expertise!</h2>
        <p>Lorem ipsum dolor sit amet, consect
            etur adipiscing elit, sed do eiusmod tempo
            r incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nis
             i ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol
             uptate velit esse cillum dolore eu fugiat nulla pariatur. Exc
            epteur sint occaecat cupid
            atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consect
            etur adipiscing elit, sed do eiusmod tempo
            r incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nis
             i ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol
             uptate velit esse cillum dolore eu fugiat nulla pariatur. Exc
            epteur sint occaecat cupid
            atat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        </div>
    </div>
  )
}

export default About