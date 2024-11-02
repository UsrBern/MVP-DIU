import React, { useState } from 'react';

const CreatePostForm = ({ addPost }) => {
  // Estados para almacenar los datos del formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [gravity, setGravity] = useState('media');

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // Genera un ID único
      title,
      description,
      location,
      type,
      gravity,
    };
    addPost(newPost); // Llama a la función del componente padre para agregar el post
    // Limpia el formulario
    setTitle('');
    setDescription('');
    setLocation('');
    setType('');
    setGravity('media');
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
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
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
      <select value={gravity} onChange={(e) => setGravity(e.target.value)} required>
        <option value="media">Media</option>
        <option value="grave">Grave</option>
        <option value="muy grave">Muy Grave</option>
      </select>
      <button type="submit">Publicar</button>
    </form>
  );
};

export default CreatePostForm;