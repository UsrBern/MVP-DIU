import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ isLoggedIn, username }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <NavLink className={navLinkClass} to='/'>
        Inicio
      </NavLink>
      <NavLink className={navLinkClass} to='/lightbulb'>
        Ampolleta
      </NavLink>
      
      {/* Muestra el nombre del usuario y un botón de "Cerrar Sesión" sin funcionalidad */}
      {isLoggedIn && (
        <div className="nav-bar__auth">
          <span className="nav-bar__username">Bienvenido, {username}</span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;