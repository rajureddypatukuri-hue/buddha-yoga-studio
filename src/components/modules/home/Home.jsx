import React from 'react'
import Hero from './hero/Hero'
import Navbar from '../navbar/Navbar'
import Innerhero from './hero/Innerhero'
import About from './About'
import VideoPage from './VideoPage'
import Middle from './Middle'
import ContactPage from './contactpage'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <Innerhero/>
    <About/>
    <VideoPage/>
    <Middle/>
    <ContactPage/>
    <Footer/>

    </>
  )
}

export default Home