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

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);


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

<NavLink exact={true} activeClassName="active" to="/">
  What's New
</NavLink>
<NavLink exact={true} activeClassName="active" to="/">
  Guides
</NavLink>
<NavLink exact={true} activeClassName="active" to="/">
  Things to do
</NavLink>
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
      <li>
        <a
          href="https://github.com/RayFFH"
          target="_blank"
          rel="noreferrer"
        >
       <img src={internet} alt="internet" className="icon" />
        </a>
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
          href="https://github.com/RayFFH"
          target="_blank"
          rel="noreferrer"
        >
        <img src={search} alt="search" className="icon" />
        </a>
      </li>

    </ul>
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

