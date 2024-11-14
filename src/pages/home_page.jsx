import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post';
import { posts as mockPosts1 } from '../data/posts';
import { posts as mockPosts2 } from '../data/posts2';
import { locations, gravities, types } from '../data/filtros';
import '../stylesheets/home_page/home_page.scss';

const HomePage = ({ useMockData1, setUseMockData1 }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedGravity, setSelectedGravity] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const initialPosts = useMockData1 ? mockPosts1 : mockPosts2;
    const filteredPosts = initialPosts.filter(post => !post.delete);
    setPosts(filteredPosts);
    localStorage.setItem('posts', JSON.stringify(filteredPosts));
  }, [useMockData1]);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleViewPost = (id) => {
    navigate(`/post/${id}`);
  };

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

      <input
        type="text"
        placeholder="Búsqueda..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="filters-container">
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

      <div className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} onViewPost={handleViewPost} />
          ))
        ) : (
          <p>No se encontraron publicaciones con esos filtros.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
