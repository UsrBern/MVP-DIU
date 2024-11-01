// Cabros: Es basicamente lo mismo q el login pq al fin y al cabo un sign up es un login que crea una cuenta, o no?

import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      onSignup(username);
    } else {
      alert('Por favor, complete todos los campos');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default SignupForm;
