import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyles } from '../styles/GlobalStyles';
import { Menu } from '../components/Menu';
import { Home } from '../pages/Home';
import { Galaxies } from '../pages/Galaxies';
import { Footer } from '../components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/galaxias" element={<Galaxies />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}