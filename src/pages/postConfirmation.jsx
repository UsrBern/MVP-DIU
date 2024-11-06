import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostConfirmation = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="post-confirmation">
      <h2>Publicación enviada al foro</h2>
      <p>Gracias por contribuir. Tu publicación ha sido enviada correctamente.</p>
      <button onClick={handleReturn}>Volver al Foro</button>
    </div>
  );
};

export default PostConfirmation;