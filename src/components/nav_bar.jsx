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
      
      {/* Botón para crear publicación */}
      <NavLink className={navLinkClass} to='/create-post'>
        Crear Publicación
      </NavLink>

      {/* Muestra el nombre del usuario y un botón de "Cerrar Sesión" */}
      {isLoggedIn && (
        <div className="nav-bar__auth">
          <span className="nav-bar__username">Bienvenido, {username}</span>
          <button className="nav-bar__logout" disabled>
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;