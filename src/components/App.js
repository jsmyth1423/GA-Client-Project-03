import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import PodcastIndex from './PodcastIndex';
import PodcastCard from './PodcastCard';
import Navbar from './Navbar';
import PodcastNew from './NewPodcast';
import EditPodcast from './EditPodcast';

import '../styles/style.scss';
import Login from './auth/Login';
import Register from './auth/Register';
import MyPodcasts from './MyPodcasts';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/podcasts/:id/edit' element={<EditPodcast />} />
      <Route path='/podcasts' element={<PodcastIndex />} />
      <Route path='/podcasts/:id' element={<PodcastCard />} />
      <Route path='createpodcast' element={<PodcastNew />} />
      <Route path='/mypodcasts/:id' element={<MyPodcasts />} />
    </Routes>
  </BrowserRouter>
);

export default App;
