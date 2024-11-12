import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostDetailPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setShowPopup(true);
  };

  const confirmDelete = () => {
    setShowPopup(false);
    navigate('/profile/history');
    alert("La publicación ha sido eliminada.");
  };

  return (
    <div className="post-detail-page">
      <h3>Título de la Publicación</h3>
      <p>Este es el contenido de la publicación...</p>
      <button className="delete-button" onClick={handleDelete}>
        🗑️ Eliminar
      </button>

      {showPopup && (
        <div className="delete-popup">
          <p>¿Estás seguro de que deseas eliminar esta publicación?</p>
          <button onClick={confirmDelete}>Sí, eliminar</button>
          <button onClick={() => setShowPopup(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
