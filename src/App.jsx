import React from 'react';
import { Routes, Route } from 'react-router-dom';
// IMPORT HALAMAN (Perhatikan huruf kecil di home)
import Home from './pages/home'; 
import Mizan from './pages/mizan';
import Aditya from './pages/aditya';
import Ali from './pages/ali';

function App() {
  return (
    <Routes>
      {/* Route untuk halaman utama (Home) */}
      <Route path="/" element={<Home />} />
      
      {/* Route untuk masing-masing profil */}
      <Route path="/mizan" element={<Mizan />} />
      <Route path="/aditya" element={<Aditya />} />
      <Route path="/ali" element={<Ali />} />
    </Routes>
  );
}

export default App;