import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import '../stylesheets/postDetail/postDetail.scss';
import sendIcon from '../assets/send-icon.png';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));

  const [message, setMessage] = useState(""); 

  if (!post) return <p>Publicación no encontrada.</p>;

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessage("");
      alert("Mensaje enviado correctamente");
    }
  };

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

        <div className="message-box">
          <input
            type="text"
            className="message-input"
            placeholder="Envia un mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>
            <img src={sendIcon} alt="Enviar" className="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
