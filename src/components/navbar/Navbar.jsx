import styles from './Navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../../assets/logo1.png'

import useClickOutside from '../../CustomHooks/ClickOutside'

const Navbar = () => {
  const MenuLink = ({ url, text }) => {
    return (
      <li className={styles.navlink}>
        <NavLink 
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${text}`}
        </NavLink>
      </li>
    )
  }

  const [isNavOpen, setIsNavOpen] = useState(false)
  let domNode = useClickOutside(() => {
    setIsNavOpen(false)
  })

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        {/* NAV-BURGER */}
        <div 
          className={styles.mobile_menu}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul 
          className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul}`}
          ref={domNode}
        >
          <div 
            className={styles.mobile_close}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>

          {/* LI - MENULINK */}
          <MenuLink url="/" text="Home"/>
          <MenuLink url="/buy" text="Purchasing"/>
          <MenuLink url="/rent" text="Renting"/>
          <MenuLink url="/search" text="Search For House"/>
          <MenuLink url="/about" text="About Us"/>
          <MenuLink url="/contact" text="Contact"/>
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* LOGIN */}
        <Link to="/auth" className={styles.login_container}>
          <span>Login</span>
          <BsArrowRight />
        </Link>
      </nav>
    </div>
  )
}

export default Navbar