import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post';
import { posts as mockPosts } from '../data/posts'; // Import mock posts
import { locations, gravities, types as types } from '../data/filtros'; // Import filter options including type
import '../stylesheets/home_page/home_page.scss';

const HomePage = () => {
  const navigate = useNavigate(); // Hook para navegar programáticamente
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for title search input
  const [selectedLocation, setSelectedLocation] = useState(''); // State for location filter
  const [selectedGravity, setSelectedGravity] = useState(''); // State for gravity filter
  const [selectedType, setSelectedType] = useState(''); // State for type filter

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

  // Filter posts based on title, location, gravity, and type
  const filteredPosts = posts.filter((post) => {
    const matchesTitle = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation ? post.location === selectedLocation : true;
    const matchesGravity = selectedGravity ? post.gravity === selectedGravity : true;
    const matchesType = selectedType ? post.type === selectedType : true;

    return matchesTitle && matchesLocation && matchesGravity && matchesType;
  });

  return (
    <div className="page-container">
      <h2>Foro de Ayuda Comunitaria</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Filters Container */}
      <div className="filters-container">
        {/* Filter by location */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Región</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Filter by type */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Tipo</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Filter by gravity */}
        <select
          value={selectedGravity}
          onChange={(e) => setSelectedGravity(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Gravedad</option>
          {gravities.map((gravity) => (
            <option key={gravity} value={gravity}>
              {gravity}
            </option>
          ))}
        </select>
      </div>

      {/* Display list of filtered posts */}
      <div className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} onViewPost={handleViewPost} /> // Pasamos handleViewPost
          ))
        ) : (
          <p>No se encontraron publicaciones con esos filtros.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

