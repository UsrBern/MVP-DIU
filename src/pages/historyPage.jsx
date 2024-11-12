import React from 'react';
import { NavLink } from 'react-router-dom';
import { posts } from '../data/posts';

const HistoryPage = () => {
    const userPost = posts.find((post) => post.id === 1);

    return (
        <div className="history-page">
          <h3>Historial de Publicaciones</h3>
          {userPost ? (
            <div className="post-item">
              <NavLink to={`/post/${userPost.id}`}>{userPost.title}</NavLink>
            </div>
          ) : (
            <p>No tienes publicaciones en el historial.</p>
          )}
        </div>
      );
};

export default HistoryPage;
