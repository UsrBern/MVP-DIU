import React from 'react';
import GravityFlag from './gravityFlag';
import '../stylesheets/post/post.scss';

const Post = ({ post, onViewPost }) => (
  <div className="post">
    {/* Convertir título en un enlace clickeable */}
    <h2
      style={{ cursor: "pointer", color: "#61dafb" }}
      onClick={() => {
        onViewPost(post.id);
      }}
    >
      {post.title}
    </h2>
    <GravityFlag gravity={post.gravity} />
    <p>{post.description}</p>
    <p><strong>Ubicación:</strong> {post.location}</p>
    <p><strong>Tipo:</strong> {post.type}</p>
  </div>
);

export default Post;
