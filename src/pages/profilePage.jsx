import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> Juan Pérez</p>
      <p><strong>Email:</strong> juanperez@example.com</p>
      
      <div className="profile-tabs">
        <NavLink to="/profile/history" className="profile-tab">
          Historial de Publicaciones
        </NavLink>
      </div>
    </div>
  );
};

export default ProfilePage;
