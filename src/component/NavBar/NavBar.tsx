import React from 'react'
import { Link } from 'react-router-dom'
import css from './NavBar.module.css'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  return (
    <nav className={css.navbar}>

      <Link to='/'>
        <img width={150} height={80} alt="logo" src={'https://th.bing.com/th/id/R.014ece3e62d9fbc62796affef1636901?rik=UEJazImpV6w8kQ&pid=ImgRaw&r=0'} />
      </Link>
      <div className={css.navbarbutton}>
        <ul className={css.nav}>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/shop'>
            <li>Shop</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}