import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PodcastNew from './NewPodcast';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>s world</h1>} />
      <Route path='createpodcast' element={<PodcastNew />} />
    </Routes>
  </BrowserRouter>
);

export default App;
