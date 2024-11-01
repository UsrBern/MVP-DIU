import React, { useState } from 'react';
import Filter from '../components/Filter';
import Post from '../components/Post';
import { posts } from '../data/posts';

const Forum = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const filtered = posts.filter(post => post[name] === value || value === "");
    setFilteredPosts(filtered);
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

