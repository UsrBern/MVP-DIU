import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home_page'
import CreatePostScreen from '../pages/createPostScreen';  // Misma convención
import NavBar from './nav_bar';  // Importación en minúscula con guion bajo, pero el componente en mayúscula

const Layout = () => {
  return (
    <Router>
      <NavBar />  {/* Renderiza NavBar correctamente */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create-post" element={<CreatePostScreen />} />
      </Routes>
    </Router>
  );
};

export default Layout;