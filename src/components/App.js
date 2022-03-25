import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<h1>Hello world</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;
