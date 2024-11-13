import React from 'react';
import { NavLink } from 'react-router-dom';
import { posts } from '../data/posts';
import '../stylesheets/profilePage/historyPage.scss'; 

const HistoryPage = () => {
    const userPosts = posts.filter((post) => post.id === 1);

    return (
        <div className="page-container">
            <h2>Historial de Publicaciones</h2>
            <div className="posts-list">
                {userPosts.length > 0 ? (
                    userPosts.map((post) => (
                        <div className="post" key={post.id}>
                            <NavLink to={`/post/${post.id}`}>
                                <h2>{post.title}</h2>
                            </NavLink>
                            <p><strong>Ubicación:</strong> {post.location}</p>
                            <p><strong>Tipo:</strong> {post.type}</p>
                            <p><strong>Gravedad:</strong> {post.gravity}</p>
                        </div>
                    ))
                ) : (
                    <p>No tienes publicaciones en el historial.</p>
                )}
            </div>
        </div>
    );
};

export default HistoryPage;
