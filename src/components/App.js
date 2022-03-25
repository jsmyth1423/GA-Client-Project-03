import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodcastIndex from './PodcastIndex';
import PodcastCard from './PodcastCard';
import '../styles/style.scss';

const App = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="/podcasts" element={<PodcastIndex />} />
      <Route path="/podcasts/:id" element={<PodcastCard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
