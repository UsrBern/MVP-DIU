import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/profilePage/profilePage.scss';
import userIcon from '../assets/user-icon.png';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-picture">
        <img src={userIcon} alt="Foto del usuario" className="user-icon" />
        </div>

        <h3 className="profile-name">Juan Pérez</h3>

        <NavLink to="/profile/posts" className="history-button">
          Mis Publicaciones
        </NavLink>

        <div className="personal-info">
          <h4>Información Personal</h4>
          <p><strong>Dirección de correo:</strong> juan.perez@apoyocatastrofes.cl</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;