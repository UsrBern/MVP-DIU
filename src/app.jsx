import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Forum from './pages/Forum';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is already logged in from a previous session
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (loggedInStatus === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleSignup = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} username={username} />
      {isLoggedIn ? (
        <Forum />
      ) : (
        <div>
          <h2>Bienvenido a la Plataforma de Ayuda</h2>
          <LoginForm onLogin={handleLogin} />
          <SignupForm onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;