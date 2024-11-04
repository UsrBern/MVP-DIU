import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));

  if (!post) return <p>Publicación no encontrada.</p>;

  return (
    <div style={{ padding: "20px", backgroundColor: "#1b1b1b", color: "#fff", borderRadius: "8px" }}>
      <h1>{post.title}</h1>
      <p><strong>Ubicación:</strong> {post.location}</p>
      <p><strong>Tipo:</strong> {post.type}</p>
      <p><strong>Nivel de gravedad:</strong> {post.gravity}</p>
      <p><strong>Descripción:</strong> {post.description}</p>
    </div>
  );
};

export default PostDetail;