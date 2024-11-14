import React, { useState, useEffect } from 'react';
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
  const [useMockData1, setUseMockData1] = useState(true);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage useMockData1={useMockData1} setUseMockData1={setUseMockData1} />} />
        <Route path="/create-post" element={<CreatePostScreen />} />
        <Route path="/post-confirmation" element={<PostConfirmation />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/posts" element={<HistoryPage useMockData1={useMockData1} />} />
        <Route path="/post/1" element={<PostOP setUseMockData1={setUseMockData1} />} />
      </Routes>
    </Router>
  );
};

export default Layout;
