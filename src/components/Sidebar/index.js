import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import heart from '../../assets/images/heart.png'
import internet from '../../assets/images/internet.png'
import search from '../../assets/images/search.png'
import share from '../../assets/images/share.png'
import hamburger from '../../assets/images/hamburger.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import SearchBar from '../SearchBar';


const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
   <div className ='nav-bar'>
    <Link className='logo' to ='/'>
        <img src={LogoS} alt ="log"/>

    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
    <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

{/* <NavLink exact={true} activeClassName="active" to="#about">
  About us
</NavLink> */}
 <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="nav-link"
        onClick={() => setShowNav(false)}
      >
        About Us
      </ScrollLink>
      <ScrollLink
        to="whats-new"
        smooth={true}
        duration={500}
        className="nav-link"
        onClick={() => setShowNav(false)}
      >
        What's new
      </ScrollLink>
      <ScrollLink
        to="image-grid-section"
        smooth={true}
        duration={500}
        className="nav-link"
        onClick={() => setShowNav(false)}
      >
        Guides
      </ScrollLink>
      <ScrollLink
        to="Thingstodo"
        smooth={true}
        duration={500}
        className="nav-link"
        onClick={() => setShowNav(false)}
      >
        Things to do
      </ScrollLink>
{/* <NavLink exact={true} activeClassName="active" to="#whats-new">
  What's New
</NavLink>
<NavLink exact={true} activeClassName="active" to="#guides">
  Guides
</NavLink>
<NavLink exact={true} activeClassName="active" to="#things-to-do">
  Things to do
</NavLink> */}
<FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />

</nav>
<ul>
      <li>
        <a
          href="https://github.com/RayFFH"
          target="_blank"
          rel="noreferrer"
        >
        <img src={heart} alt="Heart" className="icon" />
        </a>
      </li>
      <li className="dropdown">
    <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
      <img src={internet} alt="Internet" />
    </a>
    <div className="dropdown-content">
      <a href="#">English</a>
      <a href="#">Spanish</a>
      <a href="#">French</a>
      {/* Add more language choices as needed */}
    </div>
  </li>
      <li>
        <a
          href="https://github.com/RayFFH"
          target="_blank"
          rel="noreferrer"
        >
        <img src={share} alt="share" className="icon" />
        </a>
      </li>
      <li>
      <a
            href="#"
            onClick={() => {
              setShowSearchBar(!showSearchBar);
              setShowNav(false); // Close the nav if open
            }}
          >
            <img src={search} alt="search" className="icon" />
          </a>
      </li>

    </ul>
    {showSearchBar && <SearchBar onClose={() => setShowSearchBar(false)} />}
    
    <FontAwesomeIcon
  onClick={() => setShowNav(!showNav)}
  icon={showNav ? faClose : faBars}
  color="#000000"
  size="3x"
  className={showNav ? 'close-icon' : 'hamburger-icon'}
/>


   </div>
)
  }

export default Sidebar

