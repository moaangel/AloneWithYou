import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main/*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
