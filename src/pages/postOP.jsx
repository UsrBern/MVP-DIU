import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';

const PostOP = () => {
  const post = posts.find((post) => post.id === 1); // Cargar la publicación del OP
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  if (!post) {
    return <p>Publicación no encontrada.</p>;
  }

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
      <h3>{post.title}</h3>
      <p><strong>Ubicación:</strong> {post.location}</p>
      <p><strong>Tipo:</strong> {post.type}</p>
      <p><strong>Gravedad:</strong> {post.gravity}</p>
      <p><strong>Descripción:</strong> {post.description}</p>

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

export default PostOP;
