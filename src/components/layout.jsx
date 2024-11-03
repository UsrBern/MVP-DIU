import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forum from '../pages/forum';  // Importación en minúscula, pero el componente exportado en mayúscula
import CreatePostScreen from '../pages/createPostScreen';  // Misma convención
import NavBar from './nav_bar';  // Importación en minúscula con guion bajo, pero el componente en mayúscula

const Layout = () => {
  return (
    <Router>
      <NavBar />  {/* Renderiza NavBar correctamente */}
      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/create-post" element={<CreatePostScreen />} />
        <Route path="/" element={<h2>Bienvenido a la Plataforma de Ayuda</h2>} />
      </Routes>
    </Router>
  );
};

export default Layout;