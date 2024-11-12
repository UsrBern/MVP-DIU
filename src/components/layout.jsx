import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home_page';
import CreatePostScreen from '../pages/createPostScreen';
import PostConfirmation from '../pages/postConfirmation';  
import NavBar from './nav_bar';
import PostDetail from '../pages/postDetail';
import ProfilePage from '../pages/profilePage';
import HistoryPage from '../pages/historyPage';
import PostOP from '../pages/postOP';

const Layout = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePostScreen />} />
        <Route path="/post-confirmation" element={<PostConfirmation />} /> 
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/history" element={<HistoryPage />} />
        <Route path="/post/1" element={<PostOP />} />
      </Routes>
    </Router>
  );
};

export default Layout;
