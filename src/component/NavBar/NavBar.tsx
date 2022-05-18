import React from 'react'
import { Link } from 'react-router-dom'
import css from './NavBar.module.css'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  return (
    <nav className={css.navbar}>

      <Link to='/'>
        <img width={50} height={40} alt="logo" src={'https://th.bing.com/th/id/OIP.tCdAJl_5GiCudhsDGT2irQHaHa?pid=ImgDet&rs=1'} />
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