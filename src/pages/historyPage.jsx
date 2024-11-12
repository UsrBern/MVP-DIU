import React from 'react';
import { NavLink } from 'react-router-dom';

const HistoryPage = () => {
  return (
    <div className="history-page">
      <h3>Historial de Publicaciones</h3>
      <div className="post-item">
        <NavLink to="/post/1">Publicación de prueba</NavLink>
      </div>
    </div>
  );
};

export default HistoryPage;
