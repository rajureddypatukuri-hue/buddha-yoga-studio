import React, { useEffect, useState } from 'react'
import hero from'../../../../assets/bg-Ckggb7WL.jpg'
import './hero.css'
import herologo from'../../../../assets/herologo.png'
import slideimage1 from '../../../../assets/slideimage1.jpg'
import slideimage2 from '../../../../assets/slideimage2.jpg'
import slideimage3 from '../../../../assets/slideimage3.jpg'
import undelineimage from '../../../../assets/download.png'


const Hero = () => {
    const slides=[slideimage1,slideimage2,slideimage3]
    const[current,setCurrent]=useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
    
    return (
   <div className='herosec'>
   <img className='heroimg' src={hero} alt="herobg" />
   <img className='herologo' src={herologo} alt="herologo" />
   <h1 className='headline'>Find Your Inner Peace at     <br />   
       Buddha Yogo Studio</h1>
       <p className="">Experience yogo in its purest form - a balance of body,breath,and mindfulness.</p>
         <div className="slider">
        <img src={slides[current]} alt="slider" />
        
      </div>
      <h1 className='innerhead'>Discover Our Courses & More</h1>
      <img className='underlineimg' src={undelineimage} alt="underlineimg" />

   </div>
  )
}

export default Hero