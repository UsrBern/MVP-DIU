import React from 'react';
import { NavLink } from 'react-router-dom';
import { posts as mockPosts1 } from '../data/posts';
import { posts as mockPosts2 } from '../data/posts2';
import '../stylesheets/profilePage/historyPage.scss';

const HistoryPage = ({ useMockData1 }) => {
    const posts = useMockData1 ? mockPosts1 : mockPosts2;
    const userPosts = posts.filter((post) => post.id === 1 && post.delete === false);

    return (
        <div className="page-container">
            <h2>Mis Publicaciones</h2>
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
