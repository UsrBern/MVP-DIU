import React from 'react';
import GravityFlag from './gravityFlag';
import '../stylesheets/post/post.scss';

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <GravityFlag gravity={post.gravity} />
    <p>{post.description}</p>
    <p><strong>Ubicación:</strong> {post.location}</p>
    <p><strong>Tipo:</strong> {post.type}</p>
  </div>
);

export default Post;
