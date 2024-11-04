import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home_page'
import CreatePostScreen from '../pages/createPostScreen';  // Misma convención
import NavBar from './nav_bar';  // Importación en minúscula con guion bajo, pero el componente en mayúscula
import PostDetail from '../pages/postDetail'; 

const Layout = () => {
  return (
    <Router>
      <NavBar />  {/* Renderiza NavBar correctamente */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create-post" element={<CreatePostScreen />} />
        {/* Ruta dinámica para ver los detalles de una publicación */}
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default Layout;