import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePostForm from '../components/createPostForm';
import Forum from '../pages/forum';
import NavBar from '../components/nav_bar'; // Asegúrate de importar NavBar si lo necesitas

const Layout = () => {
  return (
    <Router>
      <NavBar /> {/* Puedes incluir el NavBar aquí para navegar entre páginas */}
      <Routes>
        {/* Ruta para el formulario de crear publicación */}
        <Route path="/create-post" element={<CreatePostForm />} />
        
        {/* Ruta para el foro */}
        <Route path="/forum" element={<Forum />} />
        
        {/* Ruta de inicio o cualquier otra que necesites */}
        <Route path="/" element={<h2>Bienvenido a la Plataforma de Ayuda</h2>} />
      </Routes>
    </Router>
  );
};

export default Layout;
