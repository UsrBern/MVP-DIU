import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post';
import { posts as mockPosts } from '../data/posts'; // Import mock posts

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Hook para navegar programáticamente

  // Load posts from localStorage or mock data on initial render
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      setPosts(mockPosts); // Set default mock posts if none in localStorage
      localStorage.setItem('posts', JSON.stringify(mockPosts)); // Initialize localStorage
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Función para manejar la redirección a la página de detalles de la publicación
  const handleViewPost = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <h2>Foro de Ayuda Comunitaria</h2>
      
      {/* Display list of posts */}
      <div className="posts-list">
      {posts.map((post) => (
          <Post key={post.id} post={post} onViewPost={handleViewPost} /> // Pasamos handleViewPost
        ))}
      </div>
    </div>
  );
};

export default HomePage;

