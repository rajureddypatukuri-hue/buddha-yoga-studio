import './navbar.css'
import logo from '../../../assets/yogologo.webp'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className='navbarwrapper'>

      {/* Navbar Row */}
      <div className='navbar'>

        <img src={logo} alt="yogologo" />

        {/* Desktop Menu */}
        <nav className='desktopnav'>
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/aboutus'}><li>About Us</li></Link>
            <Link to={'/Ourcourse'}><li>Course</li></Link>
            <Link to={'/Testomonial'}><li>Testimonials</li></Link>
            <Link to={'/Gallery'}> <li>Gallery</li></Link>
            <Link to={'/Blogcontent'}><li>Blog</li></Link>
            <Link to={'/Contactpage'}><li>Contact Us</li></Link>
            
             </ul>
            </nav>

        {/* Mobile Icon */}
        <HiMenu
          className="menuicon"
          onClick={() => setShowMenu(!showMenu)}
        />

      </div>
{/* Mobile Menu */}
<nav className={showMenu ? "mobilenav active" : "mobilenav"}>

  <ul>
    <Link to="/" onClick={() => setShowMenu(false)}>
      <li>Home</li>
    </Link>

    <Link to="/aboutus" onClick={() => setShowMenu(false)}>
      <li>About Us</li>
    </Link>

    <Link to="/OurCourse" onClick={() => setShowMenu(false)}>
      <li>Course</li>
    </Link>

    <Link to="/Testomonial" onClick={() => setShowMenu(false)}>
      <li>Testimonials</li>
    </Link>

    <Link to="/Gallery" onClick={() => setShowMenu(false)}>
      <li>Gallery</li>
    </Link>

    <Link to="/Blogcontent" onClick={() => setShowMenu(false)}>
      <li>Blog</li>
    </Link>

    <Link to="/contactpage" onClick={() => setShowMenu(false)}>
      <li>Contact Us</li>
    </Link>
  </ul>

</nav>

    </div>
  )
}

export default Navbar;

