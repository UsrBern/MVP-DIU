import React, { useState } from 'react';
import Filter from '../components/Filter';
import Post from '../components/Post';
import { posts } from '../data/posts';

const Forum = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    gravity: "",
    search: ""
  });

  const applyFilters = () => {
    const filtered = posts.filter(post => {
      const matchesLocation = filters.location ? post.location === filters.location : true;
      const matchesType = filters.type ? post.type === filters.type : true;
      const matchesGravity = filters.gravity ? post.gravity === filters.gravity : true;
      const matchesSearch = filters.search ? post.title.toLowerCase().includes(filters.search.toLowerCase()) || post.description.toLowerCase().includes(filters.search.toLowerCase()) : true;
      
      return matchesLocation && matchesType && matchesGravity && matchesSearch;
    });

    setFilteredPosts(filtered);
  };

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    applyFilters();
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="posts-list">
        {filteredPosts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Forum;

