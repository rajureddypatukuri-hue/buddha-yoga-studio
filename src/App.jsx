import React from 'react'
import { Routes , Route, BrowserRouter} from "react-router-dom"
import Home from './components/modules/home/Home'
import Aboutus from './components/modules/home/Aboutus'
import Middle from './components/modules/home/Middle'
import Footer from './components/modules/home/Footer'
import ContactPage from './components/modules/home/ContactPage'
import Gallery from './components/modules/home/Gallery'
import Navbar from './components/modules/navbar/Navbar'
import Ourcourse from './components/modules/home/Ourcourse'
import Testomonial from './components/modules/home/Testomonial'
import Blog from './components/modules/home/Blogcontent'
import Whatsapp from './components/modules/home/whatsapp'

const App = () => {
  return (
    <>
    <Navbar/>
    <Whatsapp/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contactpage' element={<ContactPage/>}></Route>
    <Route path='/Gallery' element={<Gallery/>}></Route>
    <Route path='/OurCourse' element={<Ourcourse/>}></Route>
   <Route
  path="/Testomonial"
  element={
    <>
      <Testomonial />
      <Footer />
    </>
  }
/>
<Route path='/Blogcontent' element={  <>
      <Blog />
      <Footer />
    </>}></Route>
    </Routes>
    
    
    </>
   
  
  
  )
}

export default App;