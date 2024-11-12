import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import userIcon from '../assets/user-icon.png';

export const NavBar = ({ isLoggedIn, username }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };


  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-bar__logo">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <NavLink className={navLinkClass} to="/">
        Foro
      </NavLink>
      
      <NavLink className={navLinkClass} to="/create-post">
        Crear Publicación
      </NavLink>

      <NavLink to="/profile" className="nav-bar__user">
        <img src={userIcon} alt="Usuario" className="user-icon" />
      </NavLink>
    </nav>
  );
};
export default NavBar;
