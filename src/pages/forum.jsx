import React, { useState, useEffect } from 'react';
import CreatePostForm from '../components/CreatePostForm';
import Post from '../components/Post';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  // Cargar publicaciones desde localStorage al iniciar
  // Serian las que estan en la carpeta /src/data
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Guardar las publicaciones en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Función para añadir una nueva publicación
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Añade el nuevo post al principio de la lista
  };

  return (
    <div>
      <h2>Foro de Ayuda Comunitaria</h2>
      {/* Formulario para crear una nueva publicación */}
      <CreatePostForm addPost={addPost} />
      
      {/* Muestra las publicaciones existentes */}
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Forum;

