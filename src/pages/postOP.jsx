import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import '../stylesheets/post/postOP.scss';

const PostOP = () => {
  const post = posts.find((post) => post.id === 1);
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
    <div className="post-detail-container">
      <div className="post-detail">
        <h2>{post.title}</h2>
        
        <div className={`gravity-flag ${post.gravity.replace(" ", "-")}`}>
          {post.gravity}
        </div>

        <p><strong>Ubicación:</strong> {post.location}</p>
        <p><strong>Tipo:</strong> {post.type}</p>

        <div className="description-box">
          <p>{post.description}</p>
        </div>

        <button className="delete-button" onClick={handleDelete}>
          🗑️ Eliminar
        </button>

        {showPopup && (
          <div className="confirmation-message">
            <p>¿Estás seguro de que deseas eliminar esta publicación?</p>
            <button onClick={confirmDelete}>Sí, eliminar</button>
            <button onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostOP;
