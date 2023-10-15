import React from 'react';
import "./NavBar.scss";
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink to="/"> 
        <div className='navbar_logo'>
            <img src="logo.png" alt="" />
        </div>
      </NavLink>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about"> A propos</NavLink>
       
        
    </nav>
  )
}

export default NavBar