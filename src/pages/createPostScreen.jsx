import React from 'react';
import CreatePostForm from '../components/createPostForm';
import '../stylesheets/create-post/createPostScreen.scss';

const CreatePostScreen = () => {
  return (
    <div className="create-post-screen">
      <div className="create-post-container">
        <h2>Crear Nueva Publicación</h2>
        <CreatePostForm />
      </div>
    </div>
  );
};

export default CreatePostScreen;