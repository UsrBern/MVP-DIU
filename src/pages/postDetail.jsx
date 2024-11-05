import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import '../stylesheets/postDetail/postDetail.scss';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));

  if (!post) return <p>Publicación no encontrada.</p>;

  return (
    <div className="post-detail-container">
      <div className="post-detail">
        <h2>{post.title}</h2>
        
        <div className={`gravity-flag ${post.gravity.replace(" ", "-")}`}>
          {post.gravity}
        </div>

        <p><strong>Ubicación:</strong> {post.location}</p>
        <p><strong>Tipo:</strong> {post.type}</p>

        <div className="description-box">
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;