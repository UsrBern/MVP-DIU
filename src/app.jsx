import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Forum from './pages/Forum';

const App = () => {
  // Estado inicial simula al usuario ya autenticado
  const [isLoggedIn] = useState(true);
  const [username] = useState('Usuario Genérico'); // Nombre del usuario genérico

  return (
    <div>
      {/* Navbar con usuario genérico */}
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      {/* Mostramos el foro directamente */}
      <Forum />
    </div>
  );
};

export default App;