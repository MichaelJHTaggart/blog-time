import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './bloglist/BlogList';
import NavBar from './navbar/NavBar';
import PostList from './postlist/PostList';
import ThinkPad from './thinkpad/ThinkPad';
import Viewer from './viewer/Viewer';

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <NavBar />
      <Routes>
        <Route index element={<BlogList />} />
        <Route path="thinkpad" element={<ThinkPad />} />
        <Route path="postlist" element={<PostList />} />
        <Route path="post/:id" element={<Viewer />} />
      </Routes>
    </div>
  )
}
export default Home;