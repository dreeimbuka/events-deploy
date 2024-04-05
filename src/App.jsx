import React, { useState } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Programs from './Componets/Services/Services'
import Title from './Componets/Title/Title'
import About from './Componets/About/About'
import Campus from './Componets/Pictorials/Pictorials'
import Testimonials from './Componets/Testimonials/Testimonials'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import VideoPlayer from './Componets/VideoPlayer/VideoPlayer'


const App = () => {
  const [playState, setPlayState]=useState(false);
  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Services' title='At Valdez Eventz We plan:'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Event Pictorials'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What our customers say'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App