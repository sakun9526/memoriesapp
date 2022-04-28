import React from 'react';
import {Container} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import Auth from './Components/Auth/auth';

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/auth"  element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>      
  );
}

export default App;
