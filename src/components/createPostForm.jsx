import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [gravity, setGravity] = useState('media');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar el formulario
    setTitle('');
    setDescription('');
    setLocation('');
    setType('');
    setGravity('media');

    // Redirigir a la pantalla de confirmación
    navigate('/post-confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <div className="location-type-container">
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tipo de Evento"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="gravity">Gravedad</label>
      <select
        id="gravity"
        value={gravity}
        onChange={(e) => setGravity(e.target.value)}
        required
      >
        <option value="media">Media</option>
        <option value="grave">Grave</option>
        <option value="muy grave">Muy Grave</option>
      </select>
      <button type="submit">Publicar</button>
    </form>
  );
};

export default CreatePostForm;