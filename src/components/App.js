import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodcastIndex from './PodcastIndex';
import PodcastCard from './PodcastCard';
import Navbar from './Navbar';
import PodcastNew from './NewPodcast';

import '../styles/style.scss';
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Hello world</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<h1>Hello world</h1>} />
      <Route path='/podcasts' element={<PodcastIndex />} />
      <Route path='/podcasts/:id' element={<PodcastCard />} />

      <Route path='createpodcast' element={<PodcastNew />} />
    </Routes>
  </BrowserRouter>
);

export default App;
