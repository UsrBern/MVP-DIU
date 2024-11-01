import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ isLoggedIn, onLogout, username }) => {
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
      
      {/* Todavia no borro lo del profe, seria lo q esta arriba de este comentario */}
      
      {isLoggedIn ? (
        <div className="nav-bar__auth">
          <span className="nav-bar__username">Bienvenido, {username}</span>
          <button className="nav-bar__logout" onClick={onLogout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="nav-bar__auth">
          <NavLink className={navLinkClass} to="/login">
            Iniciar Sesión
          </NavLink>
          <NavLink className={navLinkClass} to="/signup">
            Registrarse
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;