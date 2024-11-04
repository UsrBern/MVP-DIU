import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home_page';
import CreatePostScreen from '../pages/createPostScreen';
import PostConfirmation from '../pages/postConfirmation';  // Nueva pantalla de confirmación
import NavBar from './nav_bar';
import PostDetail from '../pages/postDetail';

const Layout = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePostScreen />} />
        <Route path="/post-confirmation" element={<PostConfirmation />} />  {/* Ruta para la confirmación */}
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default Layout;
